package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Customer;
import com.app.model.Order;
import com.app.model.ServiceDetails;
import com.app.model.Vendor;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer>{

	List<Order> findAllByCustomer(Customer cust);
	Order findByCustomerAndServDetails(Customer cust, ServiceDetails service);
	List<Order> findByServDetailsVendor(Vendor vendor);
	
}
