package com.coppisoftware.exames.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.coppisoftware.exames.entities.exame;
import com.coppisoftware.exames.repositories.exameRegRepository;




@Service
public class ExameRegService {

	@Autowired
	exameRegRepository repo;
	
	
	
	public exame buscarID(Integer id) {
		Optional<exame> resultado = repo.findById(id);
		return resultado.get();

	}
	
	
	
	public Page<exame> search(
            String searchTerm,
            int page,
            int size) {
        PageRequest pageRequest = PageRequest.of(
                page,
                size,
                Sort.Direction.ASC,
                "nome");

        return repo.search(
                searchTerm.toLowerCase(),
                pageRequest);
    }

    public Page<exame> findAll() {
        int page = 0;
        int size = 10;
        PageRequest pageRequest = PageRequest.of(
                page,
                size,
                Sort.Direction.ASC,
                "nome");
        return new PageImpl<>(
                repo.findAll(), 
                pageRequest, size);
    }
	
	
}
