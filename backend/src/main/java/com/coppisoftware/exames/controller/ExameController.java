package com.coppisoftware.exames.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coppisoftware.exames.dto.ExameDTO;
import com.coppisoftware.exames.services.ExameService;



@RestController
@RequestMapping(value="/regional")
public class ExameController {
	
	@Autowired
	private ExameService service;
	
	@GetMapping("/todos")
	public Page<ExameDTO> findAll(Pageable pageable){
	
		return service.findAll(pageable);
	}
	
	@GetMapping("/{id}")
	public ExameDTO findById(@PathVariable Integer id){
	
		return service.findById(id);
	}
	
	

}
