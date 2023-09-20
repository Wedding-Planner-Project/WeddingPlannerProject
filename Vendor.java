package com.app.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="vendor_tbl")
public class Vendor extends BaseEntity{
	@Column(length=30)
	private String cmp_name;//company name
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="uid")
	private Users user;
	@JsonIgnoreProperties(value = "vendor")
	@OneToMany(mappedBy ="vendor", orphanRemoval = true)
	private List<ServiceDetails> serviceDetails = new ArrayList<ServiceDetails>();
	
	@OneToMany(mappedBy = "vendor", orphanRemoval = true, cascade = CascadeType.ALL)
	private Set<MailBox> mailBox = new HashSet<MailBox>();
	
}
