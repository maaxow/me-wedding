package me_wedding.repository.sqlBuilder;

import java.util.ArrayList;

import me_wedding.model.Message;

public class MessageSQLBuilder extends AbstractSQLBuilder<Message> {

	public MessageSQLBuilder() {
		this.tableName = "message";
		this.columnPKName = "id";
		this.columns = new ArrayList<String>();
		this.columns.add("id");
		this.columns.add("sender");
		this.columns.add("is_anonymous");
		this.columns.add("message_date");
		this.columns.add("message");
	}
}
