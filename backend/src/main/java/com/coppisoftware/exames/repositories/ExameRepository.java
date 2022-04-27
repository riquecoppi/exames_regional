package com.coppisoftware.exames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coppisoftware.exames.entities.exame;

public interface ExameRepository extends JpaRepository<exame, Integer> {

}
