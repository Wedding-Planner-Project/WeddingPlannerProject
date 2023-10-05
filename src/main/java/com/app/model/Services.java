package com.app.model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="service_tbl")
public class Services extends BaseEntity{
	@Column(length=30, unique=true)
	private String servName;
	@JsonIgnoreProperties(value = "service")
	@OneToMany(mappedBy ="service",fetch = FetchType.EAGER, orphanRemoval = true)
	private List<ServiceDetails> serviceDetails;
	
	@OneToMany(mappedBy = "service", orphanRemoval = true)
	Set<Behaviour> behaviour = new HashSet<Behaviour>();
	
}
