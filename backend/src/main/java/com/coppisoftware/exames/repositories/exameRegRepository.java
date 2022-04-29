package com.coppisoftware.exames.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.coppisoftware.exames.entities.exame;


public interface exameRegRepository extends JpaRepository<exame, Integer> {

	@Query("FROM exame c " +
			"WHERE LOWER(c.nome) like :searchTerm% ")
	Page<exame> search(
            @Param("searchTerm") String searchTerm, 
            Pageable pageable);

}




