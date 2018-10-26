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
	public Mailing toMailing(ResultSet resultSet) {
		Mailing mail = new Mailing();
		try {
			mail.setId((Integer) resultSet.getInt("id"));
			mail.setEmail((String) resultSet.getString("email"));
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return mail;
	}
}
