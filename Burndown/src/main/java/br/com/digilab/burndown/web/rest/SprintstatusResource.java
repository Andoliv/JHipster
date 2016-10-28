package br.com.digilab.burndown.web.rest;

import com.codahale.metrics.annotation.Timed;
import br.com.digilab.burndown.domain.Sprintstatus;
import br.com.digilab.burndown.repository.SprintstatusRepository;
import br.com.digilab.burndown.web.rest.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Sprintstatus.
 */
@RestController
@RequestMapping("/api")
public class SprintstatusResource {

    private final Logger log = LoggerFactory.getLogger(SprintstatusResource.class);
        
    @Inject
    private SprintstatusRepository sprintstatusRepository;
    
    /**
     * POST  /sprintstatuses : Create a new sprintstatus.
     *
     * @param sprintstatus the sprintstatus to create
     * @return the ResponseEntity with status 201 (Created) and with body the new sprintstatus, or with status 400 (Bad Request) if the sprintstatus has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/sprintstatuses",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Sprintstatus> createSprintstatus(@Valid @RequestBody Sprintstatus sprintstatus) throws URISyntaxException {
        log.debug("REST request to save Sprintstatus : {}", sprintstatus);
        if (sprintstatus.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("sprintstatus", "idexists", "A new sprintstatus cannot already have an ID")).body(null);
        }
        Sprintstatus result = sprintstatusRepository.save(sprintstatus);
        return ResponseEntity.created(new URI("/api/sprintstatuses/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("sprintstatus", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /sprintstatuses : Updates an existing sprintstatus.
     *
     * @param sprintstatus the sprintstatus to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated sprintstatus,
     * or with status 400 (Bad Request) if the sprintstatus is not valid,
     * or with status 500 (Internal Server Error) if the sprintstatus couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/sprintstatuses",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Sprintstatus> updateSprintstatus(@Valid @RequestBody Sprintstatus sprintstatus) throws URISyntaxException {
        log.debug("REST request to update Sprintstatus : {}", sprintstatus);
        if (sprintstatus.getId() == null) {
            return createSprintstatus(sprintstatus);
        }
        Sprintstatus result = sprintstatusRepository.save(sprintstatus);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("sprintstatus", sprintstatus.getId().toString()))
            .body(result);
    }

    /**
     * GET  /sprintstatuses : get all the sprintstatuses.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of sprintstatuses in body
     */
    @RequestMapping(value = "/sprintstatuses",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Sprintstatus> getAllSprintstatuses() {
        log.debug("REST request to get all Sprintstatuses");
        List<Sprintstatus> sprintstatuses = sprintstatusRepository.findAll();
        return sprintstatuses;
    }

    /**
     * GET  /sprintstatuses/:id : get the "id" sprintstatus.
     *
     * @param id the id of the sprintstatus to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the sprintstatus, or with status 404 (Not Found)
     */
    @RequestMapping(value = "/sprintstatuses/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Sprintstatus> getSprintstatus(@PathVariable String id) {
        log.debug("REST request to get Sprintstatus : {}", id);
        Sprintstatus sprintstatus = sprintstatusRepository.findOne(id);
        return Optional.ofNullable(sprintstatus)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /sprintstatuses/:id : delete the "id" sprintstatus.
     *
     * @param id the id of the sprintstatus to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @RequestMapping(value = "/sprintstatuses/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteSprintstatus(@PathVariable String id) {
        log.debug("REST request to delete Sprintstatus : {}", id);
        sprintstatusRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("sprintstatus", id.toString())).build();
    }

}
