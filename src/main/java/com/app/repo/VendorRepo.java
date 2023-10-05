package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Vendor;

@Repository
public interface VendorRepo extends JpaRepository<Vendor, Integer>{

	Vendor findByUserEmail(String email);


}
