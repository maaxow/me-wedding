package me_wedding.repository.sqlBuilder;

import java.util.ArrayList;

import me_wedding.model.Transaction;

public class TransactionSQLBuilder extends AbstractSQLBuilder<Transaction> {

	public TransactionSQLBuilder() {
		this.tableName = "transaction";
		this.columnPKName = "id";
		this.columns = new ArrayList<String>();
		this.columns.add("id");
		this.columns.add("name");
		this.columns.add("transaction_date");
		this.columns.add("amount");
	}
}
