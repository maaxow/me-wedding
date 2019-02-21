/*
 * 
 */
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
		this.jdbcTemplate = new JdbcTemplate(this.dataSource);
	}

	@Override
	public Message findById(final long id) {
		List<Message> messages = this.jdbcTemplate.query(findByIdQuery, new Object[] { id }, (resultSet, i) -> {
			return Message.toMessage(resultSet);
		});

		if (messages.size() == 1) {
			return messages.get(0);
		}
		return null;
	}

	@Override
	public List<Message> findAll() {
		List<Message> messages = this.jdbcTemplate.query(findAllQuery, (resultSet, i) -> {
			return Message.toMessage(resultSet);
		});
		return messages;
	}

	public Message findBySender(final String sender) {
		List<Message> messages = this.jdbcTemplate.query(findBySenderQuery, new Object[] { sender }, (resultSet, i) -> {
			return Message.toMessage(resultSet);
		});

		if (messages.size() == 1) {
			return messages.get(0);
		}
		return null;
	}

	@Override
	public int save(final Message t) {
		int nbRowAffected = this.jdbcTemplate.update(saveQuery, new Object[] { t.getSender(), t.getIsAnonymous(), t.getMessageDate(), t.getMessage() });
		return nbRowAffected;
	}

	@Override
	public int delete(final long id) {
		int nbRowAffected = this.jdbcTemplate.update(deleteQuery, new Object[] { id });
		return nbRowAffected;
	}

	@Override
	public int update(final Message t) {
		int nbRowAffected = this.jdbcTemplate.update(updateQuery, new Object[] { t.getSender(), t.getIsAnonymous(), t.getMessageDate(), t.getMessage(), t.getId() });
		return nbRowAffected;
	}
}
