package com.coppisoftware.exames.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.coppisoftware.exames.dto.ExameDTO;
import com.coppisoftware.exames.entities.exame;
import com.coppisoftware.exames.repositories.ExameRepository;

@Service
public class ExameService {

	@Autowired
	private ExameRepository repository;
	
	@Transactional(readOnly = true)
	public Page<ExameDTO> findAll(Pageable pageable) {
	     Page<exame> result = repository.findAll(pageable);	
	     Page<ExameDTO> page = result.map(x -> new ExameDTO(x));
	     return page;
	     
	}
	
	@Transactional(readOnly = true)
	public ExameDTO findById(Integer Id) {
	     exame result = repository.findById(Id).get();	
	     ExameDTO dto = new ExameDTO(result);
	     return dto;
	     
	}
}
