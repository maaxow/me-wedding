package me_wedding.repository;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import me_wedding.model.Reponse;
import me_wedding.repository.sqlBuilder.ReponseSQLBuilder;

@Repository
public class ReponseRepository implements IRepository<Reponse> {

	@Inject
	private DataSource dataSource;

	private JdbcTemplate jdbcTemplate;
	private static final ReponseSQLBuilder reponseBuilder = new ReponseSQLBuilder();
	private static final String findByIdQuery = reponseBuilder.buildFindByIdQuery();
	private static final String findAllQuery = reponseBuilder.buildFindAllQuery();
	private static final String saveQuery = reponseBuilder.buildSaveQuery();
	private static final String updateQuery = reponseBuilder.buildUpdateQuery();
	private static final String deleteQuery = reponseBuilder.buildDeleteQuery();
	private static final String findByNameQuery = "SELECT * FROM " + reponseBuilder.getTableName() + " WHERE name = ?;";

	@PostConstruct
	private void postConstruct() {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	@Override
	public Reponse findById(long id) {
		List<Reponse> reponses = jdbcTemplate.query(findByIdQuery, new Object[] { id }, (resultSet, i) -> {
			return Reponse.toReponse(resultSet);
		});

		if (reponses.size() == 1) {
			return reponses.get(0);
		} else if(reponses.size() > 1) {
			try {
				throw new Exception("There are more than 1 id founded");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}

	@Override
	public int save(Reponse t) {
		int nbRowAffected = jdbcTemplate.update(saveQuery, 
				new Object[] { t.getName(), t.getEmail(), t.getIsPresent(), t.getNbAdult(), t.getNbTeenager(), t.getNbChild() });
		return nbRowAffected;
	}

	@Override
	public int delete(long id) {
		int nbRowAffected = jdbcTemplate.update(deleteQuery, new Object[] { id });
		return nbRowAffected;
	}

	@Override
	public int update(Reponse t) {
		int nbRowAffected = jdbcTemplate.update(updateQuery, 
				new Object[] { t.getName(), t.getEmail(), t.getIsPresent(), t.getNbAdult(), t.getNbTeenager(), t.getNbChild(), t.getId() });
		return nbRowAffected;
	}

	@Override
	public List<Reponse> findAll() {
		List<Reponse> reponses = jdbcTemplate.query(findAllQuery, (resultSet, i) -> {
			return Reponse.toReponse(resultSet);
		});
		return reponses;
	}
	
	public Reponse findByName(String name) {
		List<Reponse> reponses = jdbcTemplate.query(findByNameQuery, new Object[] { name }, (resultSet, i) -> {
			return Reponse.toReponse(resultSet);
		});

		if (reponses.size() == 1) {
			return reponses.get(0);
		}
		return null;
	}

}
