package com.coppisoftware.exames.dto;

import com.coppisoftware.exames.entities.exame;

public class ExameDTO {

	
	private Integer id_exame;
	private String nome;
	private String coleta;
	private String interpretacao;
	
	public ExameDTO() {
		
	}

	public ExameDTO(Integer id_exame, String nome, String coleta, String interpretacao) {
		this.id_exame = id_exame;
		this.nome = nome;
		this.coleta = coleta;
		this.interpretacao = interpretacao;
	}
	
	public ExameDTO(exame exame) {
	    id_exame = exame.getId_exame();
		nome = exame.getNome();
		coleta = exame.getColeta();
		interpretacao = exame.getInterpretacao();
	}

	public Integer getId_exame() {
		return id_exame;
	}

	public void setId_exame(Integer id_exame) {
		this.id_exame = id_exame;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getColeta() {
		return coleta;
	}

	public void setColeta(String coleta) {
		this.coleta = coleta;
	}

	public String getInterpretacao() {
		return interpretacao;
	}

	public void setInterpretacao(String interpretacao) {
		this.interpretacao = interpretacao;
	}
	
	
}
