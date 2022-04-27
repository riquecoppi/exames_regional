package com.coppisoftware.exames.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "exame")
public class exame {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_exame;
	private String nome;
	private String coleta;
	private String interpretacao;
	
	public exame() {
		
	}

	public exame(Integer id_exame, String nome, String coleta, String interpretacao) {
	
		this.id_exame = id_exame;
		this.nome = nome;
		this.coleta = coleta;
		this.interpretacao = interpretacao;
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
