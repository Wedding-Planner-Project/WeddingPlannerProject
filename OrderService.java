package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.OrdersDto;
import com.app.model.Customer;
import com.app.model.Order;
import com.app.model.ServiceDetails;
import com.app.model.Services;
import com.app.model.Status;
import com.app.model.Vendor;
import com.app.repo.AddressRepo;
import com.app.repo.CustomerRepo;
import com.app.repo.OrderRepo;
import com.app.repo.ServDetlRepo;
import com.app.repo.ServiceRepo;
import com.app.repo.VendorRepo;

@Service
public class OrderService implements IOrderService {
	
	
	@Autowired
	CustomerRepo customerRepo;
	
	@Autowired
	VendorRepo vendorRepo;
	
	@Autowired
	ServDetlRepo servdetRepo;
	
	@Autowired
	ServiceRepo servRepo;
	
	@Autowired
	AddressRepo addressRepo;
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	OrderRepo orderRepo;
	
	@Override
	public List<OrdersDto> getCustOrders(String email) {
		Customer cust = customerRepo.findByUserEmail(email);
		List<OrdersDto> myOrders = new ArrayList<OrdersDto>();
		List<Order> orders = orderRepo.findAllByCustomer(cust);
		orders.forEach(o->myOrders.add(
				new OrdersDto(o.getId(),
						o.getCreat_date(),
						o.getBook_date(),
						o.getBook_status(),
						o.getOrder_status(),
						o.getServDetails().getService().getServName(),
						o.getServDetails().getServ_price(),
						o.getServDetails().getVendor().getCmp_name(),
						o.getServDetails().getVendor().getUser().getEmail())));
		return myOrders;
	}

	@Override
	public String createOrder(OrdersDto odt, String cid) {
		if(odt.getBook_date()==null) {
			return "Add booking date";
		}
		Customer customer = customerRepo.findByUserEmail(cid);
		Services service = servRepo.findByServName(odt.getServName());
		Vendor vendor = vendorRepo.findByUserEmail(odt.getVEmail());
		ServiceDetails serdet = servdetRepo.findByServiceAndVendor(service , vendor);
		
		Order order = new Order(odt.getBook_date(),odt.getBook_status(),
				odt.getOrder_status(),serdet, customer);
		if(orderRepo.findByCustomerAndServDetails(customer, serdet)!=null) {
			return "order already exists";
		}
		orderRepo.save(order);
		
		
		return "true";
	}

	@Override
	public String updateOrder(OrdersDto odt, String cid) {
		Customer customer = customerRepo.findByUserEmail(cid);
		Services service = servRepo.findByServName(odt.getServName());
		Vendor vendor = vendorRepo.findByUserEmail(odt.getVEmail());
		ServiceDetails serdet = servdetRepo.findByServiceAndVendor(service , vendor);
		Order order = orderRepo.findByCustomerAndServDetails(customer, serdet);
		order.setBook_date(odt.getBook_date());
		order.setBook_status(odt.getBook_status());
		order.setOrder_status(odt.getOrder_status());
		
		orderRepo.save(order);
		
		return "order updated";
	}

	@Override
	public String deleteOrder(Integer oid) {
		String mesg = "true";
		Order order = orderRepo.findById(oid).orElseThrow();
		
		orderRepo.delete(order);
		
		return mesg;
	}

	@Override
	public List<OrdersDto> getAllOrders() {
		List<Order> orders  = orderRepo.findAll();
		List<OrdersDto> ods = new ArrayList<OrdersDto>();
		
		orders.forEach(o-> ods.add(
				new OrdersDto(
						o.getBook_date(),o.getBook_status(),
						o.getServDetails().getService().getServName(),
						o.getServDetails().getServ_price(),						
						o.getServDetails().getVendor().getUser().getEmail(),
						o.getCustomer().getUser().getEmail()
						)));
		return ods;
	}

	@Override
	public List<OrdersDto> getVendorOrders(String vid) {
		Vendor vendor = vendorRepo.findByUserEmail(vid);
		List<Order> orders  = orderRepo.findByServDetailsVendor(vendor);
		List<OrdersDto> ods = new ArrayList<OrdersDto>();
		
		orders.forEach(o-> ods.add(
				new OrdersDto(o.getId(),o.getCreat_date(),o.getBook_date(),o.getBook_status(),
						o.getOrder_status(),o.getServDetails().getService().getServName(),
						o.getServDetails().getServ_price(),o.getCustomer().getUser().getEmail())));
		return ods;
	}

	@Override
	public String updateOrderStatus(Integer oid) {
		
		
		Order od = orderRepo.findById(oid).orElseThrow();
		if(od.getBook_date().isAfter(LocalDate.now())) {
			return "Cannot update status before booking date";
		}else if(od.getBook_status()!=Status.COMPLETED) {
			return "Cannot update status before booking confirmation";
		}
		od.setOrder_status(Status.COMPLETED);
		
		orderRepo.save(od);
		
		return "true";
	}

	@Override
	public String confirmCustomerBooking(Integer oid) {
		Order order = orderRepo.findById(oid).orElseThrow();
		if(order.getBook_status()==Status.COMPLETED) {
			return "already confirmed";
		}else {
			order.setBook_status(Status.COMPLETED);
			orderRepo.save(order);
		}
		
		return "true";
	}

}
