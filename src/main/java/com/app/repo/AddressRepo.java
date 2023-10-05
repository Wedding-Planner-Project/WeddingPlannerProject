package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Address;

@Repository
public interface AddressRepo extends JpaRepository<Address, Integer>{

	List<Address> findByState(String state);
	
	List<Address> findByCity(String city);

}
