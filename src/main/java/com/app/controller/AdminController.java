package com.app.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CustomerDto;
import com.app.dto.OrdersDto;
import com.app.dto.ServicesDto;
import com.app.dto.VendorDto;
import com.app.model.Address;
import com.app.service.IAddressService;
import com.app.service.ICustomerService;
import com.app.service.IOrderService;
import com.app.service.IServServices;
import com.app.service.IVendorService;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	ICustomerService customerService;
	
	@Autowired
	IVendorService vendorService;
	
	@Autowired
	IOrderService orderService;
	
	@Autowired
	IServServices servServices;
	
	@Autowired
	IAddressService addressService;
	
	
	//1. add customer
	@PostMapping("/addCustomer")
	public String addCustomer(@RequestBody CustomerDto customerDto) {
		String mesg = customerService.addCustomer(customerDto);
		return mesg;
	}
	
	//2. delete customer
	@DeleteMapping("/deleteCustomer/{cid}")
	public String deleteCustomer(@PathVariable String cid) {
		String mesg = customerService.deleteCustomer(cid);	
		return mesg;
	}
	
	//3. add vendor
	@PostMapping("/addVendor")
	public String addVendor(@RequestBody VendorDto vendordto) {
		String mesg = vendorService.addVendor(vendordto);
		
		return mesg;
	}
	
	//4. delete vendor
	@DeleteMapping("/deleteVendor/{vid}")
	public String deleteVendor(@PathVariable String vid) {
		String mesg = vendorService.deleteVendor(vid);
		
		return mesg;
	}
	
	//5. view customers
	@GetMapping("/customers")
	public List<CustomerDto> getCustomers(){
		List<CustomerDto> customers = customerService.getAllCustomers();
		
		return customers;
	}
	//6. view vendor
	@GetMapping("/vendors")
	public List<VendorDto> getVendors(){
		List<VendorDto> vendors = vendorService.getAllVendors();
		return vendors;
	}
		
	//7. view orders
	@GetMapping("/orders")
	public List<OrdersDto> getAllOrders(){
		List<OrdersDto> orders = orderService.getAllOrders();
		
		return orders;
	}
	
	//9. View Services
	@GetMapping("/services")
	public List<ServicesDto> getAllServices(){
		List<ServicesDto> services = servServices.getAllServices();
		return services;
	}
	
	//9. add service
	@PostMapping("/addCategory/{sid}")
	public String addCategory(@PathVariable String sid) {
		String mesg = servServices.addCategory(sid);
		
		return mesg;
	}
	
	//10. view Service category
	@GetMapping("/category")
	public List<ServicesDto> getCategory(){
		List<ServicesDto> services = servServices.getCategories();
		return services;
	}
	
	//11. Delete Service
	@DeleteMapping("/deleteCategory/{sid}")
	public String deleteCategory(@PathVariable String sid) {
		String mesg = servServices.deleteServices(sid);
		
		return mesg;
	}
	
	//12. view available addresses
	@GetMapping("/address")
	public List<Address> getAddress(){
		List<Address> addresses = addressService.getAddresses();
		return addresses;
	}
	//13. Add new address
	@PostMapping("/address")
	public String addAddress(@RequestBody Address address) {
		String mesg = addressService.addAddress(address);
		
		return mesg;
	}
}
