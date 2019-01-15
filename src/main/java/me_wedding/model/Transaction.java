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
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getTransactionDate() {
		return transactionDate;
	}
	public void setTransactionDate(Long transactionDate) {
		this.transactionDate = transactionDate;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	
	
	/**
	 * mapping method, SQL -> Java
	 * 
	 * @param resultSet
	 * @return 
	 */
	public static Transaction toTransaction(ResultSet resultSet) {
		Transaction transaction = new Transaction();
		try {
			transaction.setId((Integer) resultSet.getInt("id"));
			transaction.setName((String) resultSet.getString("name"));
			transaction.setTransactionDate((Long) resultSet.getLong("transaction_date"));
			transaction.setAmount((Double) resultSet.getDouble("amount"));
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return transaction;
	}
}
