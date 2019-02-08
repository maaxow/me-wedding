package me_wedding.rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;

import me_wedding.model.Reponse;
import me_wedding.repository.ReponseRepository;

@Component
@Path("/reponse")
public class ReponseRestService {

	private Logger logger = LogManager.getLogger(this.getClass());
	@Inject
	private ReponseRepository reponseRepository;
	
	@GET
	@Path("/_all")
	@Produces(value = {MediaType.APPLICATION_JSON})
	public List<Reponse> getAllEmail() {
		List<Reponse> reponseList = reponseRepository.findAll();
		return reponseList;
	}
	
	@POST
	@Produces(value = {MediaType.APPLICATION_JSON})
	public Response addReponse(Reponse reponse) {
		if(reponse != null) {
			if(Reponse.isValid(reponse, true)) {
				reponseRepository.save(reponse);
				logger.info("Adding new reponse : {}", reponse);
				return Response.ok().build();
			} else {
				logger.warn("Reponse {} is not valid", reponse);
				return Response.status(Status.CONFLICT).build();
			}
		}
		return Response.status(Status.OK).build();
			
	}
	
}
