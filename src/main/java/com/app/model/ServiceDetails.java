package com.app.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@JsonInclude(content = Include.NON_NULL)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="service_details")
public class ServiceDetails extends BaseEntity{
	@Column(length=200)
	private String serv_desc;
	private Double serv_price;
	@CreationTimestamp
	private LocalDate creatn_date;
	@UpdateTimestamp
	private LocalDate mod_date;
	@JsonIgnoreProperties(value = "serviceDetails")
	@ManyToOne
	@JoinColumn(name="service_id")
	private Services service;
	@JsonIgnoreProperties(value = "serviceDetails")
	@ManyToOne
	@JoinColumn(name="vendor_id")
	private Vendor vendor;
	
	
	
	
	
	
	@JsonIgnoreProperties(value = "servDetails")
	@OneToMany(mappedBy = "servDetails", orphanRemoval = true, fetch = FetchType.EAGER)
	List<Order> orders = new ArrayList<Order>(); 
	@OneToOne(mappedBy = "servDetails",orphanRemoval = true,cascade = CascadeType.ALL)
	private CartDetails cartDetails;
	
	
	
	public ServiceDetails(String serv_desc, Double serv_price, Services service, Vendor vendor) {
		super();
		this.serv_desc = serv_desc;
		this.serv_price = serv_price;
		this.service = service;
		this.vendor = vendor;
	}
	
	
	
}
