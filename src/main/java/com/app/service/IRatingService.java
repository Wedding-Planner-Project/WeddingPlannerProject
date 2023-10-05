package com.app.service;

import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;

import com.app.dto.OrdersDto;
import com.app.dto.RatingsDto;

public interface IRatingService {
	public String giveRating(RatingsDto odt);

}
