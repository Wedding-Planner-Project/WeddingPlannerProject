package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.UserDto;
import com.app.model.Users;
import com.app.repo.UserRepo;

@Service
public class UserService implements IUserService {
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	ModelMapper mapper;
	
	@Override
	public UserDto authUser(UserDto userdto) {
		Users user = userRepo.findByEmailAndPassword(userdto.getEmail(), userdto.getPassword());
		UserDto authUser = new UserDto();
		authUser = mapper.map(user,UserDto.class);
		
		return authUser;
	}	

}
