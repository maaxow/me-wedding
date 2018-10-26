package me_wedding.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Mailing {

	private int id;
	private String email;

	
	public Mailing() {
	}
	public Mailing(String email) {
		this.email = email;
	}
	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "["+getId()+"]" + getEmail();
	}
}
