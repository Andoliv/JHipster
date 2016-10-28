package br.com.digilab.burndown.config;

import javax.validation.constraints.NotNull;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to Redmine.
 *
 * <p>
 * 		Properties are configured in the application.yml file.
 * </p>
 */
@ConfigurationProperties(prefix = "redmine", ignoreUnknownFields = false)
public class RedmineProperties {

	private final API api = new API();
	
	public API getApi() {
		return api;
	}

	public static class API {

		private final Security security = new Security();

		private final Path path = new Path();

		public Security getSecurity() {
			return security;
		}

		public Path getPath() {
			return path;
		}

		public static class Security {
			
			private String key;

			public String getKey() {
				return key;
			}

			public void setKey(String key) {
				this.key = key;
			}

		}
		
		public static class Path {

			private String redmine;

			private String issues;

			private String queries;

			public String getRedmine() {
				return redmine;
			}

			public void setRedmine(String redmine) {
				this.redmine = redmine;
			}

			public String getIssues() {
				return issues;
			}

			public void setIssues(String issues) {
				this.issues = issues;
			}

			public String getQueries() {
				return queries;
			}

			public void setQueries(String queries) {
				this.queries = queries;
			}

		}
	}

}
