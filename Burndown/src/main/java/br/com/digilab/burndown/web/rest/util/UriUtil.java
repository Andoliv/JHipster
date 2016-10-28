/**
 * 
 */
package br.com.digilab.burndown.web.rest.util;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.digilab.burndown.config.RedmineProperties;

/**
 * @author anderson.oliveira
 *
 */
public class UriUtil {
	
	 private static final Logger log = LoggerFactory.getLogger(UriUtil.class);
	 
	 private final static String HTTP = "http";
	 
	 @Inject
	 private static RedmineProperties redmineProperties;
	 
	 private static String host = redmineProperties.getApi().getPath().getRedmine();
	 
	 private static String issuesPath = redmineProperties.getApi().getPath().getIssues();
	 
	 private static String queriesPath = redmineProperties.getApi().getPath().getQueries();
	 
	 private static String key = redmineProperties.getApi().getSecurity().getKey();
	 
	 public static String createUri(Integer idProject, Integer idQuery, Boolean isIssues){
		 
		 UriComponentsBuilder uri = UriComponentsBuilder.newInstance();
		 uri.scheme(HTTP);
		 uri.host(host);
		 uri.queryParam("key", key);
		 if(isIssues){
			 uri.path(issuesPath);
		 } else {
			 uri.path(queriesPath);
		 }
		 if(idProject != null){
			 uri.queryParam("project_id", idProject);
		 }
		 if(idQuery != null){
			 uri.queryParam("query_id", idQuery);
		 }
		 		 
		 log.info(uri.build().encode().toString());
		 return uri.build().encode().toString();
	 }

}
