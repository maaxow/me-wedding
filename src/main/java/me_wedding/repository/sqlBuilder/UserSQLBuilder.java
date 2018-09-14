package me_wedding.repository.sqlBuilder;

import java.util.ArrayList;

import me_wedding.model.User;

public class UserSQLBuilder extends AbstractSQLBuilder<User> {

	public UserSQLBuilder() {
		this.tableName = "users";
		this.columnPKName = "user_id";
		this.columns = new ArrayList<String>();
		this.columns.add("user_id");
		this.columns.add("username");
		this.columns.add("password");
		this.columns.add("firstname");
		this.columns.add("lastname");
		this.columns.add("user_role");
		this.columns.add("user_point");
	}
}
