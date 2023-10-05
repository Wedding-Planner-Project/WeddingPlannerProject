package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;
import org.springframework.stereotype.Service;

import com.app.dto.OrdersDto;
import com.app.dto.RatingsDto;
import com.app.model.Customer;
import com.app.model.Order;
import com.app.model.Ratings;
import com.app.model.ServiceDetails;
import com.app.model.Services;
import com.app.model.Vendor;
import com.app.repo.AddressRepo;
import com.app.repo.CartRepo;
import com.app.repo.CustomerRepo;
import com.app.repo.OrderRepo;
import com.app.repo.RatingRepo;
import com.app.repo.ServDetlRepo;
import com.app.repo.ServiceRepo;
import com.app.repo.VendorRepo;

@Service
public class RatingService implements IRatingService {
	
	@Autowired
	CustomerRepo customerRepo;
	
	@Autowired
	ServDetlRepo servdetRepo;
	
	@Autowired
	ServiceRepo servRepo;
	
	@Autowired
	AddressRepo addressRepo;
	
	@Autowired
	VendorRepo vendorRepo;
	
	@Autowired
	OrderRepo orderRepo;
	
	@Autowired
	CartRepo cartRepo;
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	RatingRepo ratingRepo;
	
	@Override
	public String giveRating(RatingsDto odt) {
		String mesg = "rated successfully";
		Customer customer = customerRepo.findByUserEmail(odt.getCustEmail());
		Services service = servRepo.findByServName(odt.getServName());
		Vendor vendor = vendorRepo.findByUserEmail(odt.getVendEmail());
		ServiceDetails serdet = servdetRepo.findByServiceAndVendor(service , vendor);
		Order order = orderRepo.findByCustomerAndServDetails(customer, serdet);
		
		if(order!=null && serdet != null) {
			Ratings rating = new Ratings(order, odt.getRating());
			ratingRepo.save(rating);
		}else {
			mesg = "invalid order";
		}
		return mesg;
	}

}
