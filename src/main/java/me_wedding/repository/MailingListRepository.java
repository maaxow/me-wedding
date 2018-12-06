package me_wedding.repository;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import me_wedding.model.Mailing;
import me_wedding.repository.sqlBuilder.MaillingSQLBuilder;
import me_wedding.service.MailingListService;

@Repository
public class MailingListRepository implements IRepository<Mailing> {

	@Inject
	private DataSource dataSource;
	@Inject
	public MailingListService mailingListService;
	private JdbcTemplate jdbcTemplate;
	private static final MaillingSQLBuilder mailingBuilder = new MaillingSQLBuilder();
	private static final String findByIdQuery = mailingBuilder.buildFindByIdQuery();
	private static final String findAllQuery = mailingBuilder.buildFindAllQuery();
	private static final String saveQuery = mailingBuilder.buildSaveQuery();
	private static final String updateQuery = mailingBuilder.buildUpdateQuery();
	private static final String deleteQuery = mailingBuilder.buildDeleteQuery();
	private static final String findByEmailQuery = "SELECT * FROM " + mailingBuilder.getTableName() + " WHERE email = ?;";

	@PostConstruct
	private void postConstruct() {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public Mailing findById(long id) {
		List<Mailing> mails = jdbcTemplate.query(findByIdQuery, new Object[] { id }, (resultSet, i) -> {
			return mailingListService.toMailing(resultSet);
		});

		if (mails.size() == 1) {
			return mails.get(0);
		}
		return null;
	}

	@Override
	public List<Mailing> findAll() {
		List<Mailing> mails = jdbcTemplate.query(findAllQuery, (resultSet, i) -> {
			return mailingListService.toMailing(resultSet);
		});
		return mails;
	}

	public Mailing findByEmail(String email) {
		List<Mailing> mails = jdbcTemplate.query(findByEmailQuery, new Object[] { email }, (resultSet, i) -> {
			return mailingListService.toMailing(resultSet);
		});

		if (mails.size() == 1) {
			return mails.get(0);
		}
		return null;
	}
	
	@Override
	public int save(Mailing t) {
		int nbRowAffected = jdbcTemplate.update(saveQuery, new Object[] { t.getName(), t.getEmail() });
		return nbRowAffected;
	}

	@Override
	public int delete(long id) {
		int nbRowAffected = jdbcTemplate.update(deleteQuery, new Object[] { id });
		return nbRowAffected;
	}

	@Override
	public int update(Mailing t) {
		int nbRowAffected = jdbcTemplate.update(updateQuery, new Object[] { t.getEmail(), t.getId() });
		return nbRowAffected;
	}
}
