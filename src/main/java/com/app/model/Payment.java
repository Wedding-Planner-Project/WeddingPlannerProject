package com.app.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
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
@Table(name="payemnt_tbl")
public class Payment extends BaseEntity{
	@OneToOne
	@JoinColumn(name="order_id")
	private Order order;
	private String mode;
	private Double amount;
	@CreationTimestamp
//	@JsonProperty(access = Access.READ_ONLY)
	private LocalDate date;
	
}
