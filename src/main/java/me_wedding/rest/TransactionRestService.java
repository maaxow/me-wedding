/*
 * 
 */
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

import me_wedding.model.Transaction;
import me_wedding.service.TransactionService;

@Component
@Path("/transaction")
public class TransactionRestService {

	private final Logger logger = LogManager.getLogger(this.getClass());
	@Inject
	private TransactionService transactionService;

	@GET
	@Produces(value = {MediaType.APPLICATION_JSON})
	public List<Transaction> getAll() {
		return transactionService.getAll();
	}

	@GET
	@Path("/total")
	public Double getTotalAmount() {
		return transactionService.getTotalAmount();
	}



	@POST
	@Path("/add/{name}/{amount}")
	@Produces(value = {MediaType.APPLICATION_JSON})
	public Response addTransaction(@PathParam("name") final String name, @PathParam("amount") final String amount) {
		if((name != null) && (amount != null)) {
			Double amountDouble = Double.valueOf(amount);
			transactionService.add(name, amountDouble);
			return Response.status(Status.OK).build();
		}
		logger.warn("Name or Amount is null : {} {}", name, amount);
		return Response.status(Status.NOT_ACCEPTABLE).build();

	}

}
