package com.app.service;

import java.util.List;

import com.app.dto.ServicesDto;
import com.app.dto.VendorDto;
import com.app.model.ServiceDetails;

public interface IVendorService {

	String addVendor(VendorDto vendordto);

	String deleteVendor(String vid);

	List<VendorDto> getAllVendors();

	String addService(ServicesDto ser, String email);

	List<ServiceDetails> getServices(String vid);

	String updateService(ServicesDto ser, String email);

	String updateProfile(VendorDto vdto, String vid);

	String deleteProfile(String vid);

	VendorDto getVProfile(String vid);
	
}
