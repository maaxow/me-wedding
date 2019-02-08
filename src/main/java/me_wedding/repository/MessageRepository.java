package me_wedding.repository;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import me_wedding.model.Message;
import me_wedding.repository.sqlBuilder.MessageSQLBuilder;

@Repository
public class MessageRepository implements IRepository<Message> {

	@Inject
	private DataSource dataSource;

	private JdbcTemplate jdbcTemplate;
	private static final MessageSQLBuilder transactionBuilder = new MessageSQLBuilder();
	private static final String findByIdQuery = transactionBuilder.buildFindByIdQuery();
	private static final String findAllQuery = transactionBuilder.buildFindAllQuery();
	private static final String saveQuery = transactionBuilder.buildSaveQuery();
	private static final String updateQuery = transactionBuilder.buildUpdateQuery();
	private static final String deleteQuery = transactionBuilder.buildDeleteQuery();
	private static final String findBySenderQuery = "SELECT * FROM " + transactionBuilder.getTableName() + " WHERE sender = ?;";

	@PostConstruct
	private void postConstruct() {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public Message findById(long id) {
		List<Message> messages = jdbcTemplate.query(findByIdQuery, new Object[] { id }, (resultSet, i) -> {
			return Message.toMessage(resultSet);
		});

		if (messages.size() == 1) {
			return messages.get(0);
		}
		return null;
	}

	@Override
	public List<Message> findAll() {
		List<Message> messages = jdbcTemplate.query(findAllQuery, (resultSet, i) -> {
			return Message.toMessage(resultSet);
		});
		return messages;
	}

	public Message findBySender(String sender) {
		List<Message> messages = jdbcTemplate.query(findBySenderQuery, new Object[] { sender }, (resultSet, i) -> {
			return Message.toMessage(resultSet);
		});

		if (messages.size() == 1) {
			return messages.get(0);
		}
		return null;
	}
	
	@Override
	public int save(Message t) {
		int nbRowAffected = jdbcTemplate.update(saveQuery, new Object[] { t.getSender(), t.getMessageDate(), t.getMessage() });
		return nbRowAffected;
	}

	@Override
	public int delete(long id) {
		int nbRowAffected = jdbcTemplate.update(deleteQuery, new Object[] { id });
		return nbRowAffected;
	}

	@Override
	public int update(Message t) {
		int nbRowAffected = jdbcTemplate.update(updateQuery, new Object[] { t.getSender(), t.getMessageDate(), t.getMessage(), t.getId() });
		return nbRowAffected;
	}
}
