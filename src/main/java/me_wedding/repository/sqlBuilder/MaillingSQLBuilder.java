package me_wedding.repository.sqlBuilder;

import java.util.ArrayList;

import me_wedding.model.User;

public class MaillingSQLBuilder extends AbstractSQLBuilder<User> {

	public MaillingSQLBuilder() {
		this.tableName = "mailing_list";
		this.columnPKName = "id";
		this.columns = new ArrayList<String>();
		this.columns.add("id");
		this.columns.add("email");
	}
}
