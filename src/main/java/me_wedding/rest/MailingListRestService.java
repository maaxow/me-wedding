package me_wedding.rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;

import me_wedding.model.Mailing;
import me_wedding.repository.MailingListRepository;

@Component
@Path("/mailing")
public class MailingListRestService {

	private Logger logger = LogManager.getLogger(this.getClass());
	@Inject
	private MailingListRepository mailListRepository;
	
	@GET
	@Produces(value = {MediaType.APPLICATION_JSON})
	public List<Mailing> getAllEmail() {
		List<Mailing> mailingList = mailListRepository.findAll();
		return mailingList;
	}
//	@GET
//	@Path("/add/{email}")
//	@Produces(value = {MediaType.APPLICATION_JSON})
//	public Response addNewMail(@QueryParam("email") String email) {
//		Mailing maillingExists = mailListRepository.findByEmail(email);
//		if(maillingExists == null) {
//			Mailing newMail = new Mailing(email);
//			mailListRepository.save(newMail);
//			return Response.ok().build();
//		} else {
//			System.out.println("Email " + email + " already exists");
//			return Response.status(Status.CONFLICT).build();
//		}
//	}
	@POST
	@Path("/subscribe/{name}/{email}")
	@Produces(value = {MediaType.APPLICATION_JSON})
	public Response subscribe(@PathParam("name") String name, @PathParam("email") String email) {
		if(email != null) {
			Mailing maillingExists = mailListRepository.findByEmail(email);
			if(maillingExists == null) {
				if(name != null) {
					Mailing newMail = new Mailing(name, email);
					mailListRepository.save(newMail);
					logger.info("Adding new email : {} {}", name, email);
					return Response.ok().build();
				}
			} else {
				logger.warn("Email {} already exists", email);
				return Response.status(Status.CONFLICT).build();
			}
		}
		logger.warn("Name or Email is null : {} {}", name, email);
		return Response.status(Status.NOT_ACCEPTABLE).build();
			
	}
	
}
