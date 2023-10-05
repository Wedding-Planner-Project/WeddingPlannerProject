package com.app.controller;

import java.util.List;
import java.util.Set;

import javax.annotation.security.PermitAll;

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

import com.app.dto.BehaviourDto;
import com.app.dto.CartDto;
import com.app.dto.CustomerDto;
import com.app.dto.MailBoxDto;
import com.app.dto.OrdersDto;
import com.app.dto.RatingsDto;
import com.app.dto.ServicesDto;
import com.app.repo.CustomerRepo;
import com.app.service.IBehaviourService;
import com.app.service.ICartService;
import com.app.service.ICustomerService;
import com.app.service.IMailService;
import com.app.service.IOrderService;
import com.app.service.IRatingService;
import com.app.service.IServServices;


@CrossOrigin
@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	
	@Autowired
	ICustomerService custService;
	
	@Autowired
	IServServices servServices;
	
	@Autowired
	IBehaviourService behaveService;
	
	@Autowired
	IOrderService orderService;
	
	@Autowired
	ICartService cartService;
	
	@Autowired
	IRatingService ratingService;
	
	@Autowired
	IMailService mailService;
	
	//1. Browser service
	@GetMapping("/services")
	public List<ServicesDto> listServices(){
		List<ServicesDto> services = servServices.getAllServices();
		
		return services;
	}
	//2. update profile
	@PutMapping("/p/profile/{cid}")
	public String updateProfile(@RequestBody CustomerDto cust, @PathVariable String cid) {
		String mesg = custService.updateProfile(cust, cid);
		
		return mesg;
	}
	//3. delete profile
	@DeleteMapping("/p/profile/{cid}")
	public String deleteProfile(@PathVariable String cid) {
		String mesg = custService.deleteCustomer(cid);
		
		return mesg;
	}
	//view order
	@GetMapping("/p/orders/{cid}")
	public List<OrdersDto> getMyOrder(@PathVariable String cid) {
		List<OrdersDto> orders = orderService.getCustOrders(cid);
		
		return orders;
	}
	
	//4. create order 
	@PostMapping("/p/createOrder/{cid}")
	public String createOrder(@RequestBody OrdersDto odt, @PathVariable String cid) {
		String mesg = orderService.createOrder(odt, cid);
		
		return mesg;
	}
	//5. update order (Confirm Booking)
	@PostMapping("/p/updateOrder/{cid}")
	public String updateOrder(@RequestBody OrdersDto odt, @PathVariable String cid) {
		String mesg = orderService.updateOrder(odt,cid);	
		return mesg;
	}
	//6. delete order
	@DeleteMapping("/p/order/{oid}")
	public String deleteOrder(@PathVariable Integer oid) {
		String mesg = orderService.deleteOrder(oid);
		
		return mesg;
	}
	//7. rate received services
	@PostMapping("/p/rateService")
	public String rateService(@RequestBody RatingsDto odt) {
		String mesg = ratingService.giveRating(odt);
		return mesg;
	}
	
	//8. make payment
	//9. add service to cart
	@PostMapping("/p/cart/addService/{cid}")
	public String addToCart(@RequestBody CartDto cdo, @PathVariable String cid) {
		String mesg = cartService.addSerCart(cdo, cid);
		return mesg;
	}
	//10. delete service from cart
	@DeleteMapping("/p/cart/deleteService/{cid}")
	public String deleteFromCart(@RequestBody CartDto cdo, @PathVariable String cid) {
		String mesg = cartService.deleteFromCart(cdo, cid);
		return mesg;
	}
	//11. confirm cart services
	
	//12. Send message
	@PostMapping("/p/mail/{uid}")
	public String sendMessage(@RequestBody MailBoxDto mail, @PathVariable String uid) {
		String mesg = mailService.sendMessage(mail, uid);
		
		return mesg;
	}
	
	//13. Recevie messages
	@GetMapping("/p/mail/{cid}")
	public Set<MailBoxDto> receiveMessages(@PathVariable String cid){
		Set<MailBoxDto> messages = mailService.getMessages(cid);
		return messages;
	}
	
	//14. Behaviour tracker
	@PostMapping("/behaviour/{cid}/{sid}")
	public String addBehaviour(@PathVariable String cid, @PathVariable Integer sid) {
		String mesg = behaveService.addBehaviour(cid, sid);
				
		return mesg;
	}
	
	//15. Get a service by sid
	@GetMapping("/service/{sid}")
	public ServicesDto getServiceById(@PathVariable Integer sid) {
		ServicesDto service = servServices.getSingleServiceById(sid);
		
		return service;
	}
	//16. get profile
	@GetMapping("/p/profile/{cid}")
	public CustomerDto getCustomerProfile(@PathVariable String cid) {
		CustomerDto customer = custService.getProfile(cid);
		
		return customer;
	}
	
	//17. confirm booking
	@PutMapping("/p/orders/{oid}")
	public String confirmCustomerBooking(@PathVariable Integer oid) {
		String mesg = orderService.confirmCustomerBooking(oid);
		
		return mesg;
		
	}
	
	//18. Recommendations
	@GetMapping("/p/recommend/{cid}")
	public Set<ServicesDto> getRecommedationList(@PathVariable String cid){
		Set<ServicesDto> services = servServices.getRecommededList(cid);
		return services;
	}
	
	//19. Get service by serv_name
	@GetMapping("/serviceName/{sid}")
	public List<ServicesDto> getServicesByName(@PathVariable String sid){
		List<ServicesDto> services = servServices.getServiceByCategory(sid);
		
		return services;
	}
	
	//20. Get all the chats
	@GetMapping("/p/chats/{cid}")
	public Set<String> getCustomerChats(@PathVariable String cid){
		Set<String> chats = mailService.getCustomerChats(cid);
		
		return chats;
	}
	//21. get Customer-vendor pair chat
	@GetMapping("/p/messages/{cid}/{vid}")
	public Set<MailBoxDto> getCVChats(@PathVariable String cid, @PathVariable String vid){
		Set<MailBoxDto> messages = mailService.getCandVChats(cid,vid);
		
		return messages;
	}
}
