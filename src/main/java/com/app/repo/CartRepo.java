package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Cart;
import com.app.model.Customer;

@Repository
public interface CartRepo extends JpaRepository<Cart, Integer>{

	Cart findByCustomer(Customer cust);

}
