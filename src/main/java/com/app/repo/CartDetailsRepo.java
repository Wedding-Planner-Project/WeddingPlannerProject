package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Cart;
import com.app.model.CartDetails;
import com.app.model.ServiceDetails;

@Repository
public interface CartDetailsRepo extends JpaRepository<CartDetails, Integer>{

	CartDetails findByCartAndServDetails(Cart cart, ServiceDetails servdet);
}
