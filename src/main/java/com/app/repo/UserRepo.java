package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Users;
@Repository
public interface UserRepo extends JpaRepository<Users, Integer>{

	Users findByEmailAndPassword(String email, String password);
	Users findByEmail(String email);
	
}
