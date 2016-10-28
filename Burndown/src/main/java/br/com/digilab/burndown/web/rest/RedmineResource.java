/**
 * 
 */
package br.com.digilab.burndown.web.rest;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.util.Optional;

import javax.inject.Inject;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codahale.metrics.annotation.Timed;

import br.com.digilab.burndown.config.RedmineProperties;
import br.com.digilab.burndown.domain.Sprint;
import br.com.digilab.burndown.model.Redmine;

/**
 * @author anderson.oliveira
 * 
 * REST controller for managing Redmine.
 *
 */
@RestController
@RequestMapping("/api")
public class RedmineResource {

	private final Logger log = LoggerFactory.getLogger(RedmineResource.class);
	
	@Inject
	private RedmineProperties redmineProperties;
	
	@RequestMapping(value = "/redmine",
	        method = RequestMethod.GET,
	        produces = MediaType.APPLICATION_JSON_VALUE)
	@Timed
	public ResponseEntity<Redmine> getRedmineProperties(){
		log.debug("REST request to get Redmine Properties");
		
		String key = redmineProperties.getApi().getSecurity().getKey();
		String redminePath = redmineProperties.getApi().getPath().getRedmine();
		String issuesPath = redmineProperties.getApi().getPath().getIssues();
		String queriesPath = redmineProperties.getApi().getPath().getQueries();
		
		Redmine redmine = new Redmine(key, redminePath, issuesPath, queriesPath);
		
		return Optional.ofNullable(redmine)
	            .map(user -> new ResponseEntity<>(redmine, HttpStatus.OK))
	            .orElse(new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
	}
	
	@RequestMapping(value = "/redmine",
	        method = RequestMethod.POST,
	        produces = MediaType.APPLICATION_JSON_VALUE)
	    @Timed
	    public ResponseEntity<Sprint> renderCanvas(@Valid @RequestBody Sprint sprint) throws URISyntaxException {
	        log.debug("REST request to renderCanvas with Sprint: {}", sprint);
	        
	        String key = redmineProperties.getApi().getSecurity().getKey();
			String redminePath = redmineProperties.getApi().getPath().getRedmine();
			String issuesPath = redmineProperties.getApi().getPath().getIssues();
			String queriesPath = redmineProperties.getApi().getPath().getQueries();
	        
			StringBuilder query = new StringBuilder();
			query.append("project_id=" + sprint.getIdProject());
			query.append("&");
			query.append("query_id=" + sprint.getIdQuery());
			query.append("&");
			query.append("key=" + key);
			
			
			
	        // Monstar URL do Redmine e trazer os issues
	        URI uri = new URI("http", null, redminePath, 8080, "/"+issuesPath, query.toString(), null);
	        try {
				log.info(uri.toURL().toString());
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        
	        
	        // Com as informações das Issues
	        
	        /*
	        return ResponseEntity.created(new URI("/api/sprints/" + result.getId()))
	            .headers(HeaderUtil.createEntityCreationAlert("sprint", result.getId().toString()))
	            .body(result);
	        */
	        return null;
	    }
}
