package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Services;

@Repository
public interface ServiceRepo extends JpaRepository<Services, Integer>{

	Services findByServName(String service);

}
