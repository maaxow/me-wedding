/*
 * 
 */
package me_wedding.model;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Transaction {

	private Integer id;
	private String name;
	private Long transactionDate;
	private Double amount;
	
	public Integer getId() {
		return id;
	}
	public void setId(final Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(final String name) {
		this.name = name;
	}
	public Long getTransactionDate() {
		return transactionDate;
	}
	public void setTransactionDate(final Long transactionDate) {
		this.transactionDate = transactionDate;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(final Double amount) {
		this.amount = amount;
	}
	
	
	/**
	 * mapping method, SQL -> Java
	 * 
	 * @param resultSet
	 * @return 
	 */
	public static Transaction toTransaction(final ResultSet resultSet) {
		Transaction transaction = new Transaction();
		try {
			transaction.setId(resultSet.getInt("id"));
			transaction.setName(resultSet.getString("name"));
			transaction.setTransactionDate(resultSet.getLong("transaction_date"));
			transaction.setAmount(resultSet.getDouble("amount"));
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return transaction;
	}
}
