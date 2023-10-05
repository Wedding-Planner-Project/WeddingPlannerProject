package com.app.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="order_tbl")
public class Order extends BaseEntity{
	@CreationTimestamp
	private LocalDate creat_date;
	private LocalDate book_date;	// booking date
	@Enumerated(EnumType.STRING)
	private Status book_status; 	// booking status
	@Enumerated(EnumType.STRING)
	private Status order_status; 	// order status
	@ManyToOne
	@JoinColumn(name="serdetl_id")
	private ServiceDetails servDetails;
	@ManyToOne
	@JoinColumn(name="cust_id")
	private Customer customer;
	
	
	
	@OneToOne(mappedBy = "order", orphanRemoval = true)
	Ratings rating;
	@OneToOne(mappedBy = "order", orphanRemoval = true)
	Payment payment;
	public Order(LocalDate book_date, Status book_status, Status order_status, ServiceDetails servDetails,
			Customer customer) {
		super();
		this.book_date = book_date;
		this.book_status = book_status;
		this.order_status = order_status;
		this.servDetails = servDetails;
		this.customer = customer;
	}
	
	
	
	
	
}
