package com.app.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IAddressService;


@CrossOrigin
@RestController
@RequestMapping("/aux")
public class AuxiliaryController {
	
	@Autowired
	IAddressService addressService;
	
	@GetMapping("/state")
	public Set<String> getState(){
		Set<String> states = addressService.getState();
		
		return states;
	}
	
	@GetMapping("/city/{state}")
	public Set<String> getCity(@PathVariable String state){
		Set<String> city = addressService.getCity(state);
		
		return city;
	}
	
	@GetMapping("/pincode/{city}")
	public Set<Integer> getPincode(@PathVariable String city){
		Set<Integer> pincode  = addressService.getPincode(city);
		
		return pincode;
	}
	
}
