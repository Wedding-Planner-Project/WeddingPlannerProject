package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Behaviour;
import com.app.model.Customer;
import com.app.model.Services;

@Repository
public interface BehaviourRepo extends JpaRepository<Behaviour, Integer>{
	List<Behaviour> findByCustomerUserEmail(String email);
	
	
	Behaviour findByCustomerAndService(Customer cust, Services serv);
}
