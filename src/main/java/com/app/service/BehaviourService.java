package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.BehaviourDto;
import com.app.model.Behaviour;
import com.app.model.Customer;
import com.app.model.ServiceDetails;
import com.app.model.Services;
import com.app.repo.AddressRepo;
import com.app.repo.BehaviourRepo;
import com.app.repo.CartRepo;
import com.app.repo.CustomerRepo;
import com.app.repo.MailRepo;
import com.app.repo.ServDetlRepo;
import com.app.repo.ServiceRepo;
import com.app.repo.VendorRepo;

@Service
public class BehaviourService implements IBehaviourService {
	@Autowired
	CustomerRepo customerRepo;
	
	@Autowired
	ServDetlRepo servdetRepo;
	
	@Autowired
	ServiceRepo servRepo;
	
	@Autowired
	AddressRepo addressRepo;
	
	@Autowired
	BehaviourRepo behaveRepo;
	
	@Autowired
	CartRepo cartRepo;
	
	@Autowired
	VendorRepo vendorRepo;
	
	@Autowired
	MailRepo mailRepo;

	@Override
	public String addBehaviour(String cid, Integer sid) {
		String mesg = "true";
		Customer customer = customerRepo.findByUserEmail(cid);
		ServiceDetails servdet = servdetRepo.findById(sid).orElseThrow();
		
		Services service = servRepo.findByServName(servdet.getService().getServName());
		
		Behaviour behave=behaveRepo.findByCustomerAndService(customer, service);
		
		if(behave!=null) {
			int count = behave.getCount();
			behave.setCount(++count);
		}else {
			behave = new Behaviour(customer, service);
			behave.setCount(1);
		}
		behaveRepo.save(behave);
		
		return mesg;
		
	}
	
	
	

}
