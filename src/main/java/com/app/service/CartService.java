package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.CartDto;
import com.app.model.Cart;
import com.app.model.CartDetails;
import com.app.model.Customer;
import com.app.model.ServiceDetails;
import com.app.model.Services;
import com.app.model.Vendor;
import com.app.repo.AddressRepo;
import com.app.repo.CartDetailsRepo;
import com.app.repo.CartRepo;
import com.app.repo.CustomerRepo;
import com.app.repo.ServDetlRepo;
import com.app.repo.ServiceRepo;
import com.app.repo.VendorRepo;

@Service
public class CartService implements ICartService {

	@Autowired
	CustomerRepo customerRepo;

	@Autowired
	ServDetlRepo servdetRepo;

	@Autowired
	ServiceRepo servRepo;

	@Autowired
	AddressRepo addressRepo;

	@Autowired
	ModelMapper mapper;

	@Autowired
	CartRepo cartRepo;

	@Autowired
	VendorRepo vendorRepo;

	@Autowired
	CartDetailsRepo cartdetRepo;

	@Override
	public String addSerCart(CartDto cart, String email) {
		Customer cust = customerRepo.findByUserEmail(email);
		Services service = servRepo.findByServName(cart.getServName());
		Vendor vendor = vendorRepo.findByUserEmail(cart.getVendEmail());
		ServiceDetails servdet = servdetRepo.findByServiceAndVendor(service, vendor);

		Cart crt = cartRepo.findByCustomer(cust);

		CartDetails crdt = new CartDetails(crt, servdet);
		cartdetRepo.save(crdt);

		return "service added to cart";

	}

	@Override
	public String deleteFromCart(CartDto cart, String email) {
		Customer cust = customerRepo.findByUserEmail(email);
		Services service = servRepo.findByServName(cart.getServName());
		Vendor vendor = vendorRepo.findByUserEmail(cart.getVendEmail());
		ServiceDetails servdet = servdetRepo.findByServiceAndVendor(service, vendor);

		Cart crt = cartRepo.findByCustomer(cust);
		CartDetails crdt = cartdetRepo.findByCartAndServDetails(crt, servdet);

		if(crdt!=null)
			cartdetRepo.deleteById(crdt.getId());

		return "service deleted from cart";
	}

}
