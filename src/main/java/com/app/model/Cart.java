package com.app.model;

import java.util.HashSet;
import java.util.Set;

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
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="cart_tbl")
public class Cart extends BaseEntity{
	@OneToOne
	@JoinColumn(name="cust_id")
	private Customer customer;
	@OneToMany(mappedBy = "cart", orphanRemoval = true,fetch = FetchType.EAGER)
	Set<CartDetails> cartDetails = new HashSet<CartDetails>();
	public Cart(Customer customer) {
		super();
		this.customer = customer;
	}
	
	
}
