package me_wedding.repository;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import me_wedding.model.Transaction;
import me_wedding.repository.sqlBuilder.TransactionSQLBuilder;

@Repository
public class TransactionRepository implements IRepository<Transaction> {

	@Inject
	private DataSource dataSource;

	private JdbcTemplate jdbcTemplate;
	private static final TransactionSQLBuilder transactionBuilder = new TransactionSQLBuilder();
	private static final String findByIdQuery = transactionBuilder.buildFindByIdQuery();
	private static final String findAllQuery = transactionBuilder.buildFindAllQuery();
	private static final String saveQuery = transactionBuilder.buildSaveQuery();
	private static final String updateQuery = transactionBuilder.buildUpdateQuery();
	private static final String deleteQuery = transactionBuilder.buildDeleteQuery();
	private static final String findByNameQuery = "SELECT * FROM " + transactionBuilder.getTableName() + " WHERE name = ?;";

	@PostConstruct
	private void postConstruct() {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public Transaction findById(long id) {
		List<Transaction> mails = jdbcTemplate.query(findByIdQuery, new Object[] { id }, (resultSet, i) -> {
			return Transaction.toTransaction(resultSet);
		});

		if (mails.size() == 1) {
			return mails.get(0);
		}
		return null;
	}

	@Override
	public List<Transaction> findAll() {
		List<Transaction> mails = jdbcTemplate.query(findAllQuery, (resultSet, i) -> {
			return Transaction.toTransaction(resultSet);
		});
		return mails;
	}

	public Transaction findByName(String name) {
		List<Transaction> mails = jdbcTemplate.query(findByNameQuery, new Object[] { name }, (resultSet, i) -> {
			return Transaction.toTransaction(resultSet);
		});

		if (mails.size() == 1) {
			return mails.get(0);
		}
		return null;
	}
	
	@Override
	public int save(Transaction t) {
		int nbRowAffected = jdbcTemplate.update(saveQuery, new Object[] { t.getName(), t.getTransactionDate(), t.getAmount() });
		return nbRowAffected;
	}

	@Override
	public int delete(long id) {
		int nbRowAffected = jdbcTemplate.update(deleteQuery, new Object[] { id });
		return nbRowAffected;
	}

	@Override
	public int update(Transaction t) {
		int nbRowAffected = jdbcTemplate.update(updateQuery, new Object[] { t.getName(), t.getTransactionDate(), t.getAmount(), t.getId() });
		return nbRowAffected;
	}
}
