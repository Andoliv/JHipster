package br.com.digilab.burndown.repository;

import br.com.digilab.burndown.domain.Sprint;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Sprint entity.
 */
@SuppressWarnings("unused")
public interface SprintRepository extends MongoRepository<Sprint,String> {

}
