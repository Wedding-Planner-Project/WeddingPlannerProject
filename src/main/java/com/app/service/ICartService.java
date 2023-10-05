package com.app.service;

import com.app.dto.CartDto;

public interface ICartService {
	public String addSerCart(CartDto cart, String email);

	public String deleteFromCart(CartDto cdo, String cid);
}
