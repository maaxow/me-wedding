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

import me_wedding.model.Message;
import me_wedding.repository.MessageRepository;

@Component
@Path("/message")
public class MessageRestService {

	private Logger logger = LogManager.getLogger(this.getClass());
	
	@Inject
	private MessageRepository messageRepository;
	
	@GET
	@Produces(value = {MediaType.APPLICATION_JSON})
	public List<Message> getAll() {
		return messageRepository.findAll();
	}
	
	@POST
	@Produces(value = {MediaType.APPLICATION_JSON})
	public Response createMessage(Message message) {
		if(message != null) {
			if(message.getSender() != null && message.getMessage() != null) {
				messageRepository.save(message);
				return Response.status(Status.OK).build();
			} else {
				logger.warn("Sender name  or Message is null : {} {}", message.getSender(), message.getMessage());
				return Response.status(Status.NOT_ACCEPTABLE).build();
			}
		} else {
			return Response.status(Status.BAD_REQUEST).build();
		}
	}
	
}
