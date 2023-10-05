package com.app.repo;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Customer;
import com.app.model.MailBox;
import com.app.model.Vendor;

@Repository
public interface MailRepo extends JpaRepository<MailBox, Integer>{

	List<MailBox> findByCustomerUserEmailAndVendorUserEmail(String cid, String vid);
	List<MailBox> findByCustomerUserEmail(String email);
	List<MailBox> findByCustomer(Customer customer);
	List<MailBox> findByVendor(Vendor vendor);
	List<MailBox> findByVendorUserEmail(String vid);
}
