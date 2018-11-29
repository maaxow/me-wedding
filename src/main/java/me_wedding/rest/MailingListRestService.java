package me_wedding.rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import me_wedding.model.Mailing;
import me_wedding.repository.MailingListRepository;

@Component
@Path("/mailing")
public class MailingListRestService {

	private static final Logger logger = LoggerFactory.getLogger(MailingListRestService.class);
	
	@Inject
	private MailingListRepository mailListRepository;
	
	@GET
	@Produces(value = {MediaType.APPLICATION_JSON})
	public List<Mailing> getAllEmail() {
		List<Mailing> mailingList = mailListRepository.findAll();
		return mailingList;
	}
	@GET
	@Path("/add/{email}")
	@Produces(value = {MediaType.APPLICATION_JSON})
	public Response addNewMail(@QueryParam("email") String email) {
		logger.error("Trying to add : ", email);
		Mailing maillingExists = mailListRepository.findByEmail(email);
		if(maillingExists == null) {
			Mailing newMail = new Mailing(email);
			mailListRepository.save(newMail);
			return Response.ok().build();
		} else {
			System.out.println("Email " + email + " already exists");
			return Response.status(Status.CONFLICT).build();
		}
	}
	
}
