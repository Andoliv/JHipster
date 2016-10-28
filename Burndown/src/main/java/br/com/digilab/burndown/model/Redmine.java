/**
 * 
 */
package br.com.digilab.burndown.model;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author anderson.oliveira
 *
 */
public class Redmine {
	
	private final String key;
	private final String redminePath;
	private final String issuesPath;
	private final String queriesPath;
	
	public Redmine(String key, String redminePath, String issuesPath, String queriesPath) {
		this.key = key;
		this.redminePath = redminePath;
		this.issuesPath = issuesPath;
		this.queriesPath = queriesPath;
	}

	public String getKey() {
		return key;
	}

	public String getRedminePath() {
		return redminePath;
	}

	public String getIssuesPath() {
		return issuesPath;
	}

	public String getQueriesPath() {
		return queriesPath;
	}
	
}
