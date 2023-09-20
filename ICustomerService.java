package com.app.service;

import java.util.List;

import com.app.dto.CustomerDto;

public interface ICustomerService {

	public String addCustomer(CustomerDto custdto);

	String deleteCustomer(String cid);

	List<CustomerDto> getAllCustomers();

	String updateProfile(CustomerDto cust, String cid);

	CustomerDto getProfile(String cid);

}
