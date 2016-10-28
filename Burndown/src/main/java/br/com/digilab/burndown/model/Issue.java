/**
 * 
 */
package br.com.digilab.burndown.model;

import java.util.List;
import java.util.Map;

import org.springframework.data.annotation.Id;

/**
 * @author anderson.oliveira
 *
 */
public class Issue {

	@Id
	private int id_issue;
	private String closed_on;
	private Map<String, Object> author;
	private Map<String, Object> fixed_version;
	private String created_on;
	private List<Customfield> custom_fields;
	private String description;
	private Map<String, Object> status;
	private String updated_on;
	private String start_date;
	private Map<String, Object> priority;
	private Map<String, Object> project;
	private String subject;
	private Map<String, Object> assigned_to;
	private Map<String, Object> tracker;
	private int id;
	private int done_ratio;
	
	public int getId_issue() {
		return id_issue;
	}
	public void setId_issue(int id_issue) {
		this.id_issue = id_issue;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Map<String, Object> getAuthor() {
		return author;
	}
	public void setAuthor(Map<String, Object> author) {
		this.author = author;
	}
	public Map<String, Object> getTracker() {
		return tracker;
	}
	public void setTracker(Map<String, Object> tracker) {
		this.tracker = tracker;
	}
	public Map<String, Object> getStatus() {
		return status;
	}
	public void setStatus(Map<String, Object> status) {
		this.status = status;
	}
	public Map<String, Object> getAssigned_to() {
		return assigned_to;
	}
	public void setAssigned_to(Map<String, Object> assigned_to) {
		this.assigned_to = assigned_to;
	}
	public Map<String, Object> getFixed_version() {
		return fixed_version;
	}
	public void setFixed_version(Map<String, Object> fixed_version) {
		this.fixed_version = fixed_version;
	}
	public Map<String, Object> getPriority() {
		return priority;
	}
	public void setPriority(Map<String, Object> priority) {
		this.priority = priority;
	}
	public Map<String, Object> getProject() {
		return project;
	}
	public void setProject(Map<String, Object> project) {
		this.project = project;
	}
	public List<Customfield> getCustom_fields() {
		return custom_fields;
	}
	public void setCustom_fields(List<Customfield> custom_fields) {
		this.custom_fields = custom_fields;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCreated_on() {
		return created_on;
	}
	public void setCreated_on(String created_on) {
		this.created_on = created_on;
	}
	public String getUpdated_on() {
		return updated_on;
	}
	public void setUpdated_on(String updated_on) {
		this.updated_on = updated_on;
	}
	public String getClosed_on() {
		return closed_on;
	}
	public void setClosed_on(String closed_on) {
		this.closed_on = closed_on;
	}
	public String getStart_date() {
		return start_date;
	}
	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}
	public int getDone_ratio() {
		return done_ratio;
	}
	public void setDone_ratio(int done_ratio) {
		this.done_ratio = done_ratio;
	}

}
