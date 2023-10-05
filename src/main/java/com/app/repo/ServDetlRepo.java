package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.model.ServiceDetails;
import com.app.model.Services;
import com.app.model.Vendor;

@Repository
public interface ServDetlRepo extends JpaRepository<ServiceDetails, Integer>{
	
	List<ServiceDetails> findByServiceServName(String serviceName);

	List<ServiceDetails> findByService(Services service);

	@Query("select COUNT(s.servName) from Services s where s.servName=:service")
	Integer countService(@Param("service") String service);

	ServiceDetails findByServiceAndVendor(Services service, Vendor vendor);

	List<ServiceDetails> findAllByVendor(Vendor vendor);

}
