/*
 * 
 */
package me_wedding.rest;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.springframework.stereotype.Component;

@Component
@Path("/server")
public class EngineRestService {


	@GET
	@Path("/version")
	public Response getVersion() {
		String version = this.getVersionFromPom();
		return Response.ok(version).build();
	}

	@POST
	@Path("/login")
	public Response login(final String password) {
		return this.isValidPassword(password) ? Response.ok().build() : Response.status(Status.FORBIDDEN).build();

	}

	/**
	 * get the version properties in the pom.xml
	 * 
	 * @return
	 */
	private synchronized String getVersionFromPom() {
		String version = null;

		Package aPackage = this.getClass().getPackage();
		if (aPackage != null) {
			version = aPackage.getImplementationVersion();
		}

		if (version == null) {
			// we could not compute the version so use a blank
			version = "unknow";
		}

		return version;
	}

	private boolean isValidPassword(final String password) {

		return true;
	}
}
