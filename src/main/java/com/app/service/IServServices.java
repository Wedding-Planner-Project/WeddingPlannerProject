package com.app.service;

import java.util.List;
import java.util.Set;

import com.app.dto.ServicesDto;

public interface IServServices {

	public List<ServicesDto> getAllServices();

	public List<ServicesDto> getCategories();

	public String deleteServices(String sid);

	public String addCategory(String sid);

	public ServicesDto getSingleServiceById(Integer sid);

	public Set<ServicesDto> getRecommededList(String cid);

	public List<ServicesDto> getServiceByCategory(String sid);
}
