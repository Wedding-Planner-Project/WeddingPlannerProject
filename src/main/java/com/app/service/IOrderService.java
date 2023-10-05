package com.app.service;

import java.util.List;

import com.app.dto.OrdersDto;

public interface IOrderService {
	public List<OrdersDto> getCustOrders(String email);

	public String createOrder(OrdersDto odt, String cid);

	public String updateOrder(OrdersDto odt, String cid);

	public String deleteOrder(Integer oid);

	public List<OrdersDto> getAllOrders();

	public List<OrdersDto> getVendorOrders(String vid);

	public String updateOrderStatus(Integer oid);

	public String confirmCustomerBooking(Integer oid);

}
