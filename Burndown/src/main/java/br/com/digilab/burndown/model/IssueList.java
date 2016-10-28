/**
 * 
 */
package br.com.digilab.burndown.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author anderson.oliveira
 *
 */
@JsonIgnoreProperties({ "limit", "total_count", "offset" })
public class IssueList {
	
	private List<Issue> issues;
	
	public IssueList() {
		issues = new ArrayList<Issue>();
	}

	public List<Issue> getIssues() {
		return issues;
	}

	public void setIssues(List<Issue> issues) {
		this.issues = issues;
	}

	
	
}
