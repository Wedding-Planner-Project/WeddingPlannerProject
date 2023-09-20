package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customexceptions.EmailDoesntExistException;
import com.app.dto.ServicesDto;
import com.app.dto.VendorDto;
import com.app.model.Address;
import com.app.model.ServiceDetails;
import com.app.model.Services;
import com.app.model.Users;
import com.app.model.Vendor;
import com.app.repo.AddressRepo;
import com.app.repo.ServDetlRepo;
import com.app.repo.ServiceRepo;
import com.app.repo.UserRepo;
import com.app.repo.VendorRepo;

@Service
public class VendorService implements IVendorService{
	
	@Autowired
	VendorRepo vendorRepo;
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	AddressRepo addrRepo;
	
	@Autowired
	ServiceRepo serviceRepo;
	
	@Autowired
	ServDetlRepo servdetRepo;
	
	@Autowired
	ModelMapper mapper;
	
	private final EmailService emailService;
	// Inject the EmailService through constructor injection
    public VendorService(EmailService emailService) {
        this.emailService = emailService;
    }

 @Override
 public String addVendor(VendorDto vendordto) {
     // Check if email already exists
     if (userRepo.findByEmail(vendordto.getEmail()) != null) {
         return "Email already exists";
     }
     
     // Sending email
     String subject = "Welcome to Our Platform!";
     String content = "Thank you for registering on our platform. We're excited to have you as a vendor!";
     
     try {
         emailService.sendRegistrationEmail(vendordto.getEmail(), subject, content);
     } catch (Exception e) {
         throw new EmailDoesntExistException("Email sending failed");
     }
     
     // If email sending is successful, proceed with creating and saving the vendor
     Users user = new Users();
     Vendor vendor = new Vendor();
     
     Address addr = addrRepo.findById(vendordto.getPincode()).orElseThrow();
     user = mapper.map(vendordto, Users.class);
     user.setAddress(addr);
     
     vendor.setUser(user);
     vendor.setCmp_name(vendordto.getCmp_name());
     
     vendorRepo.save(vendor);
     
     
     return "true";
 }


	@Override
	public String deleteVendor(String vid) {
		Vendor vendor = vendorRepo.findByUserEmail(vid);
		if(vendor!=null)
			vendorRepo.delete(vendor);
		return "true";
	}

	@Override
	public List<VendorDto> getAllVendors() {
		List<VendorDto> allVendors = new ArrayList<VendorDto>();
		List<Vendor> vendors = vendorRepo.findAll();
		vendors.forEach(v->allVendors.add(
					new VendorDto(v.getUser().getEmail(),
							v.getUser().getPassword(),v.getUser().getFirst_name(),
							v.getUser().getLast_name(),v.getUser().getMob_no(),
							v.getUser().getDob(),v.getUser().getGender(),
							v.getUser().getAddress(),v.getUser().getAddress().getPincode(),
							v.getUser().getRole(),v.getCmp_name())
				));
		return allVendors;
	}

	

	@Override
	public List<ServiceDetails> getServices(String vid) {
		Vendor vendor = vendorRepo.findByUserEmail(vid);
		List<ServiceDetails> services = servdetRepo.findAllByVendor(vendor);
		return services;
	}

	@Override
	public String addService(ServicesDto ser, String email) {
		Vendor vendor = vendorRepo.findByUserEmail(email);
		Services service = serviceRepo.findByServName(ser.getServName());
		if(servdetRepo.findByServiceAndVendor(service, vendor)!=null) {
			return "service already exists";
		}
		ServiceDetails sd = new ServiceDetails(ser.getServ_desc(),
						ser.getServ_price(),service, vendor);
		servdetRepo.save(sd);
		return "true";
	}

	@Override
	public String updateService(ServicesDto ser, String email) {
		Vendor vendor = vendorRepo.findByUserEmail(email);
		Services service = serviceRepo.findByServName(ser.getServName());
		ServiceDetails sd = servdetRepo.findByServiceAndVendor(service, vendor);
		sd.setServ_desc(ser.getServ_desc());
		sd.setServ_price(ser.getServ_price());
		servdetRepo.save(sd);
		
		return "service updated";
	}

	@Override
	public String updateProfile(VendorDto vdto, String vid) {
		String mesg = "true";
		Address addr = addrRepo.findById(vdto.getAddress().getPincode()).orElseThrow();
		Vendor vendor = vendorRepo.findByUserEmail(vid);
		vendor.setCmp_name(vdto.getCmp_name());
		vendor.getUser().setAddress(addr);
		vendor.getUser().setDob(vdto.getDob());
		vendor.getUser().setFirst_name(vdto.getFirst_name());
		vendor.getUser().setLast_name(vdto.getLast_name());
		vendor.getUser().setMob_no(vdto.getMob_no());
//		vendor.getUser().setPassword(vdto.getPassword());
		vendor.getUser().setGender(vdto.getGender());
		vendorRepo.save(vendor);
		return mesg;
		
		
	}

	@Override
	public String deleteProfile(String vid) {
		Vendor vendor = vendorRepo.findByUserEmail(vid);
		vendorRepo.delete(vendor);
		
		return "vendor deleted";
	}

	@Override
	public VendorDto getVProfile(String vid) {
		Vendor ven = vendorRepo.findByUserEmail(vid);
		
		VendorDto vendor;
		vendor = mapper.map(ven.getUser(), VendorDto.class);
		vendor.setCmp_name(ven.getCmp_name());
		
		return vendor;
	}



}
