/*
 * 
 */
package me_wedding.service;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

import me_wedding.model.Mailing;

@Service
public class MailingListService {


	/**
	 * mapping method, SQL -> Java
	 * 
	 * @param resultSet
	 * @return
	 */
	public Mailing toMailing(final ResultSet resultSet) {
		Mailing mail = new Mailing();
		try {
			mail.setId(resultSet.getInt("id"));
			mail.setName(resultSet.getString("name"));
			mail.setEmail(resultSet.getString("email"));
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return mail;
	}
}
