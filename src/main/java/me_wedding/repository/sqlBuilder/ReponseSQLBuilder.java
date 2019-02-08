package me_wedding.repository.sqlBuilder;

import java.util.ArrayList;

import me_wedding.model.User;

public class ReponseSQLBuilder extends AbstractSQLBuilder<User> {

	public ReponseSQLBuilder() {
		this.tableName = "reponse";
		this.columnPKName = "id";
		this.columns = new ArrayList<String>();
		this.columns.add("id");
		this.columns.add("name");
		this.columns.add("email");
		this.columns.add("is_present");
		this.columns.add("nb_adult");
		this.columns.add("nb_teenager");
		this.columns.add("nb_child");
	}
}
