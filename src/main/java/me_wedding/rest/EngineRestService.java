package me_wedding.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.springframework.stereotype.Component;

@Component
@Path("/server")
public class EngineRestService {

	
	@GET
	@Path("/version")
	public Response getVersion() {
		String version = getVersionFromPom();
		return Response.ok(version).build();
	}
	
	private synchronized String getVersionFromPom() {
	    String version = null;

        Package aPackage = getClass().getPackage();
        if (aPackage != null) {
            version = aPackage.getImplementationVersion();
	    }

	    if (version == null) {
	        // we could not compute the version so use a blank
	        version = "unknow";
	    }

	    return version;
	} 
}
