package com.app.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.MailBoxDto;
import com.app.dto.OrdersDto;
import com.app.dto.ServicesDto;
import com.app.dto.VendorDto;
import com.app.model.ServiceDetails;
import com.app.model.Users;
import com.app.service.IMailService;
import com.app.service.IOrderService;
import com.app.service.IVendorService;


@CrossOrigin
@RestController
@RequestMapping("/vendor")
public class VendorController {
	
	@Autowired
	IVendorService vendorService;
	
	@Autowired
	IMailService mailService;
	
	@Autowired
	IOrderService orderService;
	
	//1. add service
	@PostMapping("/addservice/{vid}")
	public String addService(@RequestBody ServicesDto ser, @PathVariable String vid) {
		String mesg = vendorService.addService(ser, vid);
		return mesg;
	}
	
	//2.  view Service
	@GetMapping("/services/{vid}")
	public List<ServicesDto> getServices(@PathVariable String vid){
		List<ServiceDetails> services = vendorService.getServices(vid);
		List<ServicesDto> allServices = new ArrayList<ServicesDto>();
		services.forEach(s->allServices.add(new ServicesDto(s.getService().getServName(),
											s.getServ_desc(),s.getServ_price(),
											s.getCreatn_date(),s.getMod_date())));
		return allServices;
	}
	//3. update service
	@PostMapping("/updateService/{vid}")
	public String updateService(@RequestBody ServicesDto ser, @PathVariable String vid) {
		String mesg = vendorService.updateService(ser,vid);
		
		return mesg;
	}
	
	//4. update profile
	@PutMapping("/profile/{vid}")
	public String updateProfile(@RequestBody VendorDto vdto, @PathVariable String vid) {
		String mesg = vendorService.updateProfile(vdto, vid);
		
		return mesg;
	}
	
	//5. delete profile
	@DeleteMapping("/profile/{vid}")
	public String deleteProfile(@PathVariable String vid) {
		String mesg = vendorService.deleteProfile(vid);
		
		return mesg;	
	}
	//6. view orders
	@GetMapping("/orders/{vid}")
	public List<OrdersDto> getVendOrders(@PathVariable String vid){
		List<OrdersDto> orders = orderService.getVendorOrders(vid);
		
		return orders;
	}
	//7. cancel orders
	@DeleteMapping("/orders/{oid}")
	public String cancelOrder(@PathVariable Integer oid) {
		String mesg = orderService.deleteOrder(oid);
		return mesg;
	}
	
	
	//8. change  status of orders to completed
	@PutMapping("/orders/{oid}")
	public String updateOrderStatus(@PathVariable Integer oid) {
		String mesg = orderService.updateOrderStatus(oid);
		
		return mesg;
	}
	
	//9. send message
	@PostMapping("/mail/{uid}")
	public String sendMessage(@RequestBody MailBoxDto mail, @PathVariable String uid) {
		String mesg = mailService.sendMessage(mail, uid);
		
		return mesg;
	}
	
	//10. get Messages
	@GetMapping("/mail/{vid}")
	public Set<MailBoxDto> receiveMessages(@PathVariable String vid){
		Set<MailBoxDto> messages = mailService.getVMessages(vid);
		return messages;
	}
	
	//11. get vendor profile
	@GetMapping("/profile/{vid}")
	public VendorDto getVendorProfile(@PathVariable String vid) {
		VendorDto vendor = vendorService.getVProfile(vid);
		
		return vendor;
	}
	
	//12. get Vendor chats
	@GetMapping("/chats/{vid}")
	public Set<String> getVendorChats(@PathVariable String vid){
		Set<String> chats = mailService.getVendorChats(vid);
		
		return chats;
	}
	
	//13. get Vendor-customer pair chats
	@GetMapping("/messages/{cid}/{vid}")
	public Set<MailBoxDto> getCVChats(@PathVariable String cid, @PathVariable String vid){
		Set<MailBoxDto> messages = mailService.getCandVChats(cid,vid);
		
		return messages;
	}
}
