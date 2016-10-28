package br.com.digilab.burndown.repository;

import br.com.digilab.burndown.domain.Sprintstatus;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Sprintstatus entity.
 */
@SuppressWarnings("unused")
public interface SprintstatusRepository extends MongoRepository<Sprintstatus,String> {

}
