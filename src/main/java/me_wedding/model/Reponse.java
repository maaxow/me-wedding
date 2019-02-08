package me_wedding.model;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Reponse {

	private Long id;
	private String name;
	private String email;
	private Boolean isPresent;
	private Integer nbAdult;
	private Integer nbTeenager;
	private Integer nbChild;
	
	/**
	 * Constructor
	 */
	public Reponse() {
		this.name = "";
		this.email = "";
		this.isPresent = false;
		this.nbAdult = 0;
		this.nbTeenager = 0;
		this.nbChild = 0;
	}
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	/**
	 * @return the isPresent
	 */
	public Boolean getIsPresent() {
		return isPresent;
	}
	/**
	 * @param isPresent the isPresent to set
	 */
	public void setIsPresent(Boolean isPresent) {
		this.isPresent = isPresent;
	}
	/**
	 * @return the nbAdult
	 */
	public Integer getNbAdult() {
		return nbAdult;
	}
	/**
	 * @param nbAdult the nbAdult to set
	 */
	public void setNbAdult(Integer nbAdult) {
		this.nbAdult = nbAdult;
	}
	/**
	 * @return the nbTeenager
	 */
	public Integer getNbTeenager() {
		return nbTeenager;
	}
	/**
	 * @param nbTeenager the nbTeenager to set
	 */
	public void setNbTeenager(Integer nbTeenager) {
		this.nbTeenager = nbTeenager;
	}
	/**
	 * @return the nbChild
	 */
	public Integer getNbChild() {
		return nbChild;
	}
	/**
	 * @param nbChild the nbChild to set
	 */
	public void setNbChild(Integer nbChild) {
		this.nbChild = nbChild;
	}
	public static Reponse toReponse(ResultSet resultSet) {
		Reponse reponse = new Reponse();
		try {
			reponse.setId((Long) resultSet.getLong("id"));
			reponse.setName((String) resultSet.getString("name"));
			reponse.setEmail((String) resultSet.getString("email"));
			reponse.setIsPresent((Boolean) resultSet.getBoolean("is_present"));
			reponse.setNbAdult((Integer) resultSet.getInt("nb_adult"));
			reponse.setNbTeenager((Integer) resultSet.getInt("nb_teenager"));
			reponse.setNbChild((Integer) resultSet.getInt("nb_child"));
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return reponse;
	}
}
