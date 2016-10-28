/**
 * 
 */
package br.com.digilab.burndown.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author anderson.oliveira
 *
 */
@JsonIgnoreProperties({ "limit", "total_count", "offset" })
public class Queries {

	private List<Query> queries;

	public List<Query> getQueries() {
		return queries;
	}

	public void setQueries(List<Query> queries) {
		this.queries = queries;
	}

}
