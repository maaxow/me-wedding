package me_wedding.model;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Message {

	private Integer id;
	private String sender;
	private Long messageDate;
	private String message;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public Long getMessageDate() {
		return messageDate;
	}
	public void setMessageDate(Long messageDate) {
		this.messageDate = messageDate;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	/**
	 * mapping method, SQL -> Java
	 * 
	 * @param resultSet
	 * @return 
	 */
	public static Message toMessage(ResultSet resultSet) {
		Message transaction = new Message();
		try {
			transaction.setId((Integer) resultSet.getInt("id"));
			transaction.setSender((String) resultSet.getString("sender"));
			transaction.setMessageDate((Long) resultSet.getLong("message_date"));
			transaction.setMessage((String) resultSet.getString("message"));
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return transaction;
	}
}
