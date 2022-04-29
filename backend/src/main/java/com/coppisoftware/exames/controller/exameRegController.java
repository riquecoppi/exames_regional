package com.coppisoftware.exames.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.coppisoftware.exames.entities.exame;
import com.coppisoftware.exames.services.ExameRegService;


@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/apiexames")
public class exameRegController {

    @Autowired 	
	private ExameRegService exameRegService;
    
    @GetMapping("/search")
    public Page<exame> search(
            @RequestParam("searchTerm") String searchTerm,
            @RequestParam(
                    value = "page",
                    required = false,
                    defaultValue = "0") int page,
            @RequestParam(
                    value = "size",
                    required = false,
                    defaultValue = "10") int size) {
        return exameRegService.search(searchTerm, page, size);

    }

    @GetMapping
    public Page<exame> getAll() {
        return exameRegService.findAll();
    }
}
