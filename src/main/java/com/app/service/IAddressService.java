package com.app.service;

import java.util.List;
import java.util.Set;

import com.app.model.Address;

public interface IAddressService {
	public Set<String> getState();
	
	public Set<String> getCity(String state);
	
	public Set<Integer> getPincode(String city);

	public List<Address> getAddresses();

	public String addAddress(Address address);
}
