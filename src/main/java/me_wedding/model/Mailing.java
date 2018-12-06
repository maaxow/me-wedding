package me_wedding.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Mailing {

	private int id;
	private String name;
	private String email;

	
	public Mailing() {
	}
	public Mailing(String name, String email) {
		this.name = name;
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

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "["+getId()+"]" + getName() + " : " +getEmail();
	}
}
