package com.app.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ServicesDto;
import com.app.model.Behaviour;
import com.app.model.ServiceDetails;
import com.app.model.Services;
import com.app.repo.AddressRepo;
import com.app.repo.BehaviourRepo;
import com.app.repo.CustomerRepo;
import com.app.repo.ServDetlRepo;
import com.app.repo.ServiceRepo;

@Service
public class ServServices implements IServServices {
	@Autowired
	CustomerRepo customerRepo;

	@Autowired
	ServDetlRepo servdetRepo;

	@Autowired
	ServiceRepo servRepo;

	@Autowired
	AddressRepo addressRepo;

	@Autowired
	ModelMapper mapper;

	@Autowired
	BehaviourRepo behaveRepo;

	@Override
	public List<ServicesDto> getAllServices() {
		List<ServiceDetails> services = servdetRepo.findAll();
		List<ServicesDto> allServices = new ArrayList<ServicesDto>();

		services.forEach(s -> allServices.add(new ServicesDto(s.getId(), s.getService().getServName(), s.getServ_desc(),
				s.getServ_price(), s.getCreatn_date(), s.getVendor().getUser().getFirst_name(),
				s.getVendor().getCmp_name(), s.getVendor().getUser().getAddress().getPincode(),
				s.getVendor().getUser().getAddress().getCity(), s.getVendor().getUser().getAddress().getState(),
				s.getVendor().getUser().getMob_no(), s.getVendor().getUser().getEmail())));
		return allServices;
	}

	@Override
	public List<ServicesDto> getCategories() {
		List<ServicesDto> categories = new ArrayList<ServicesDto>();
		List<Services> services = servRepo.findAll();
		services.forEach(s -> categories.add(new ServicesDto(s.getServName())));
		return categories;
	}

	@Override
	public String deleteServices(String sid) {
		String mesg = "true";

		Services service = servRepo.findByServName(sid);
		servRepo.delete(service);

		return mesg;
	}

	@Override
	public String addCategory(String sid) {
		String mesg = "true";
		Services service = new Services();
		service.setServName(sid);
		servRepo.save(service);

		return mesg;
	}

	@Override
	public ServicesDto getSingleServiceById(Integer sid) {
		ServiceDetails s = servdetRepo.findById(sid).orElseThrow();

		ServicesDto myService = new ServicesDto(s.getId(), s.getService().getServName(), s.getServ_desc(),
				s.getServ_price(), s.getCreatn_date(), s.getVendor().getUser().getFirst_name(),
				s.getVendor().getCmp_name(), s.getVendor().getUser().getAddress().getPincode(),
				s.getVendor().getUser().getAddress().getCity(), s.getVendor().getUser().getAddress().getState(),
				s.getVendor().getUser().getMob_no(), s.getVendor().getUser().getEmail());

		return myService;
	}

	@Override
	public Set<ServicesDto> getRecommededList(String cid) {
		List<Behaviour> behave = behaveRepo.findByCustomerUserEmail(cid);

		Collections.sort(behave, new Comparator<Behaviour>() {

			@Override
			public int compare(Behaviour o1, Behaviour o2) {
				return o2.getCount() - o1.getCount();
			}

		});
		Set<ServicesDto> servs = new LinkedHashSet<ServicesDto>();
		for (Behaviour b : behave) {
			List<ServiceDetails> service = servdetRepo.findByService(b.getService());
			service.forEach(s -> servs.add(new ServicesDto(s.getId(), s.getServ_desc(), s.getService().getServName(),
					s.getServ_price(), s.getCreatn_date(), s.getVendor().getUser().getFirst_name(),
					s.getVendor().getCmp_name(), s.getVendor().getUser().getAddress().getPincode(),
					s.getVendor().getUser().getAddress().getCity(), s.getVendor().getUser().getAddress().getState(),
					s.getVendor().getUser().getMob_no(), s.getVendor().getUser().getEmail())));
		}

		return servs;

	}

	@Override
	public List<ServicesDto> getServiceByCategory(String sid) {

		List<ServiceDetails> services = servdetRepo.findByServiceServName(sid);

		List<ServicesDto> myServices = new ArrayList<ServicesDto>();

		services.forEach(s -> myServices.add(new ServicesDto(s.getId(), s.getServ_desc(), s.getService().getServName(),
				s.getServ_price(), s.getCreatn_date(), s.getVendor().getUser().getFirst_name(),
				s.getVendor().getCmp_name(), s.getVendor().getUser().getAddress().getPincode(),
				s.getVendor().getUser().getAddress().getCity(), s.getVendor().getUser().getAddress().getState(),
				s.getVendor().getUser().getMob_no(), s.getVendor().getUser().getEmail())));
		
		return myServices;

	}

}
