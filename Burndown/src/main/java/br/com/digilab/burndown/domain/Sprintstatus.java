package br.com.digilab.burndown.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Sprintstatus.
 */

@Document(collection = "sprintstatus")
public class Sprintstatus implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("status_date")
    private LocalDate statusDate;

    @Field("points_resolved")
    private Integer pointsResolved;

    @Field("points_remaining")
    private Integer pointsRemaining;

    @Field("issues_resolved")
    private String issuesResolved;

    @NotNull
    @Field("id_sprint")
    private String idSprint;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getStatusDate() {
        return statusDate;
    }

    public void setStatusDate(LocalDate statusDate) {
        this.statusDate = statusDate;
    }

    public Integer getPointsResolved() {
        return pointsResolved;
    }

    public void setPointsResolved(Integer pointsResolved) {
        this.pointsResolved = pointsResolved;
    }

    public Integer getPointsRemaining() {
        return pointsRemaining;
    }

    public void setPointsRemaining(Integer pointsRemaining) {
        this.pointsRemaining = pointsRemaining;
    }

    public String getIssuesResolved() {
        return issuesResolved;
    }

    public void setIssuesResolved(String issuesResolved) {
        this.issuesResolved = issuesResolved;
    }

    public String getIdSprint() {
        return idSprint;
    }

    public void setIdSprint(String idSprint) {
        this.idSprint = idSprint;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Sprintstatus sprintstatus = (Sprintstatus) o;
        if(sprintstatus.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, sprintstatus.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Sprintstatus{" +
            "id=" + id +
            ", statusDate='" + statusDate + "'" +
            ", pointsResolved='" + pointsResolved + "'" +
            ", pointsRemaining='" + pointsRemaining + "'" +
            ", issuesResolved='" + issuesResolved + "'" +
            ", idSprint='" + idSprint + "'" +
            '}';
    }
}
