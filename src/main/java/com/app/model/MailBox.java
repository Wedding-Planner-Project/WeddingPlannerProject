package com.app.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
@Table(name="mailbox_tbl")
public class MailBox extends BaseEntity{
	@ManyToOne
	@JoinColumn(name="customer_id")
	private Customer customer;
	@ManyToOne
	@JoinColumn(name="vendor_id")
	private Vendor vendor;
	@ManyToOne
	@JoinColumn(name="sender_id")
	private Users sender;
	@CreationTimestamp
	private LocalDate sentDate;
	private String mesg;
	@Enumerated(EnumType.STRING)
	private Read readStatus;
	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return super.hashCode();
	}
	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		return super.equals(obj);
	}
	public MailBox(Customer customer, Vendor vendor, Users sender, String mesg, Read readStatus) {
		super();
		this.customer = customer;
		this.vendor = vendor;
		this.sender = sender;
		this.mesg = mesg;
		this.readStatus = readStatus;
	}
	
	
	

	
	
	
	
}
