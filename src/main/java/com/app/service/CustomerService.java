package com.app.service;

import java.util.ArrayList;
import com.app.customexceptions.*;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.CustomerDto;
import com.app.model.Address;
import com.app.model.Cart;
import com.app.model.Customer;
import com.app.model.Users;
import com.app.repo.AddressRepo;
import com.app.repo.CartRepo;
import com.app.repo.CustomerRepo;
import com.app.repo.ServDetlRepo;
import com.app.repo.ServiceRepo;
import com.app.repo.UserRepo;

@Service
public class CustomerService implements ICustomerService {
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	CustomerRepo customerRepo;
	
	@Autowired
	ServDetlRepo servdetRepo;
	
	@Autowired
	ServiceRepo servRepo;
	
	@Autowired
	AddressRepo addressRepo;
	
	@Autowired
	CartRepo cartRepo;
	
	@Autowired
	ModelMapper mapper;
	
	private final EmailService emailService;

    // Inject the EmailService through constructor injection
    public CustomerService(EmailService emailService) {
        this.emailService = emailService;
    }
	
	//Method to Register Customer
	@Override
	public String addCustomer(CustomerDto custdto) {
	    if (userRepo.findByEmail(custdto.getEmail()) != null) {
	        return "Email already exists";
	    }
	    
	    // Sending email
	    String subject = "Welcome to Our Platform!";
	    String content = "Thank you for registering on our platform. We're excited to have you as a customer!";
	    
	    try {
	        emailService.sendRegistrationEmail(custdto.getEmail(), subject, content);
	    } catch (Exception e) {
	        throw new EmailDoesntExistException("Email sending failed"); // Throw the custom exception
	    }
	    
	    // If email sending is successful, proceed with customer creation and saving
	    Customer customer = new Customer();
	    Users user = new Users();
	    Address addrs = addressRepo.findById(custdto.getPincode()).orElseThrow();
	    custdto.setAddress(addrs);
	    user = mapper.map(custdto, Users.class);
	    customer.setUser(user);
	    Cart cart = new Cart(customer);
	    customerRepo.save(customer);
	    cartRepo.save(cart);

	    return "true";
	}


	
	

	@Override
	public String deleteCustomer(String cid) {
		String mesg = "Customer deleted";
		Customer cust = customerRepo.findByUserEmail(cid);
		if(cust!=null)
			customerRepo.delete(cust);
		return mesg+" "+cust.getUser().getFirst_name();
	}

	@Override
	public List<CustomerDto> getAllCustomers() {
		List<CustomerDto> allCust = new ArrayList<CustomerDto>();
		List<Customer> cust = customerRepo.findAll();
		cust.forEach(u->allCust.add(mapper.map(u.getUser(), CustomerDto.class)));
		return allCust;
	}

	@Override
	public String updateProfile(CustomerDto cust, String cid) {
		String mesg = "Profile updated";
		
		Customer c = customerRepo.findByUserEmail(cid);
		Address addr = addressRepo.findById(cust.getPincode()).orElseThrow();
		
		c.getUser().setAddress(addr);
		c.getUser().setFirst_name(cust.getFirst_name());
		c.getUser().setLast_name(cust.getLast_name());
		c.getUser().setMob_no(cust.getMob_no());
		c.getUser().setDob(cust.getDob());
		c.getUser().setGender(cust.getGender());				
		
		customerRepo.save(c);
		return mesg;
	}

	@Override
	public CustomerDto getProfile(String cid) {
		Customer customer = customerRepo.findByUserEmail(cid);
		CustomerDto myCustomer;
		
		myCustomer = mapper.map(customer.getUser(), CustomerDto.class);
		myCustomer.setId(customer.getId());
		
		return myCustomer;
	}



}
