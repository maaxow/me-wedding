package me_wedding.model;

import java.util.ArrayList;
import java.util.List;

public class Family {

	private int id;
	private List<User> members;

	public Family() {
		this.members = new ArrayList<User>();
	}

	public Family(List<User> members) {
		setMembers(members);
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the members
	 */
	public List<User> getMembers() {
		return members;
	}

	/**
	 * @param members
	 *            the members to set
	 */
	public void setMembers(List<User> members) {
		this.members = members;
	}

	public void addMember(User member) {
		this.members.add(member);
	}
}
