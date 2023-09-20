package com.app.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="customer_tbl")
public class Customer extends BaseEntity{
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)//Here we can use joinfetch also (join fetch is most recommended),when size is small then you can use fetch type
	@JoinColumn(name="uid")
	private Users user;
	
	
	@OneToMany(mappedBy = "customer", orphanRemoval = true)
	List<Order> orders = new ArrayList<Order>();
	@OneToOne(mappedBy = "customer", orphanRemoval = true)
	Cart cart;
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<MailBox> mailBox = new HashSet<MailBox>();
	
	@OneToMany(mappedBy = "customer", orphanRemoval = true)
	private Set<Behaviour> behaviour = new HashSet<Behaviour>();
	
	public Customer(Users user) {
		super();
		this.user = user;
	}
	
	
}
