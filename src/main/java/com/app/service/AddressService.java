package com.app.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Address;
import com.app.repo.AddressRepo;

@Service
public class AddressService implements IAddressService{
	
	@Autowired
	AddressRepo addressRepo;

	@Override
	public Set<String> getState() {
		List<Address> address = addressRepo.findAll();
		Set<String> ads = new HashSet<String>();
		address.forEach(a->ads.add(a.getState()));
		
		return ads;
		
	}

	@Override
	public Set<String> getCity(String state) {
		List<Address> address = addressRepo.findByState(state);
		Set<String> city = new HashSet<String>();
		address.forEach(a->city.add(a.getCity()));
		
		return city;
	}

	@Override
	public Set<Integer> getPincode(String city) {
		List<Address> address = addressRepo.findByCity(city);
		Set<Integer> pincode  = new HashSet<Integer>();
		
		address.forEach(a-> pincode.add(a.getPincode()));
		
		return pincode;
	}

	@Override
	public List<Address> getAddresses() {
		List<Address> addresses = addressRepo.findAll();
		
		
		return addresses;
	}

	@Override
	public String addAddress(Address address) {
		String mesg = "true";
		
		addressRepo.save(address);
		
		return mesg;
	}
	
	

}
