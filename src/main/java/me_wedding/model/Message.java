/*
 * 
 */
package me_wedding.model;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Message {

	private Integer id;
	private String sender;
	private Boolean isAnonymous;

	private Long messageDate;
	private String message;

	public Integer getId() {
		return this.id;
	}
	public void setId(final Integer id) {
		this.id = id;
	}
	public String getSender() {
		return this.sender;
	}
	public void setSender(final String sender) {
		this.sender = sender;
	}
	/**
	 * @return the isAnonymous
	 */
	public Boolean getIsAnonymous() {
		return this.isAnonymous;
	}
	/**
	 * @param isAnonymous the isAnonymous to set
	 */
	public void setIsAnonymous(final Boolean isAnonymous) {
		this.isAnonymous = isAnonymous;
	}

	public Long getMessageDate() {
		return this.messageDate;
	}

	public void setMessageDate(final Long messageDate) {
		this.messageDate = messageDate;
	}
	public String getMessage() {
		return this.message;
	}
	public void setMessage(final String message) {
		this.message = message;
	}


	/**
	 * mapping method, SQL -> Java
	 * 
	 * @param resultSet
	 * @return
	 */
	public static Message toMessage(final ResultSet resultSet) {
		Message transaction = new Message();
		try {
			transaction.setId(resultSet.getInt("id"));
			transaction.setSender(resultSet.getString("sender"));
			transaction.setIsAnonymous(resultSet.getBoolean("is_anonymous"));
			transaction.setMessageDate(resultSet.getLong("message_date"));
			transaction.setMessage(resultSet.getString("message"));
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return transaction;
	}
}
