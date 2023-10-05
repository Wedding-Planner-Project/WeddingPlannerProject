package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.*;

import com.app.model.Address;
import com.app.model.Gender;
import com.app.model.Role;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@JsonInclude(content = Include.NON_NULL, value = Include.NON_NULL)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDto {
	private Integer id;
	@NotEmpty(message = "Email is required")
    @Email(message = "Invalid email format")
	private String email;
//<<<<<<< HEAD
//	@JsonIgnore
//=======
//>>>>>>> ff3bc339f1db361c56bd9c5ffdc511a3ff7471a6
	
	@NotEmpty(message = "Password is required")
    private String password;

    @NotEmpty(message = "First name is required")
    private String first_name;

    @NotEmpty(message = "Last name is required")
    private String last_name;

    @NotNull(message = "Mobile number is required")
    private Long mob_no;

    @Past(message = "Date of birth must be in the past")
    private LocalDate dob;

	private Gender gender;
	private Address address;
	 @NotNull(message = "Pincode is required")
	    private Integer pincode;

	    private Role role = Role.ROLE_CUSTOMER;
	
	
	
	public CustomerDto(String email, String password, String first_name, String last_name, Long mob_no, LocalDate dob,
			Gender gender, Integer pincode) {
		super();
		this.email = email;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.mob_no = mob_no;
		this.dob = dob;
		this.gender = gender;
		this.pincode = pincode;
	}
	
	
	
	public CustomerDto(String email, String password, String first_name, String last_name, Long mob_no, LocalDate dob,
			Gender gender, Address address, Role role) {
		super();
		this.email = email;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.mob_no = mob_no;
		this.dob = dob;
		this.gender = gender;
		this.address = address;
		this.role = role;
	}



	public CustomerDto(String password, String first_name, String last_name, Long mob_no, LocalDate dob, Gender gender,
			Integer pincode) {
		super();
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.mob_no = mob_no;
		this.dob = dob;
		this.gender = gender;
		this.pincode = pincode;
	}



	public CustomerDto(String email, String password, String first_name, String last_name, Long mob_no, LocalDate dob,
			Gender gender, Address address, Integer pincode, Role role) {
		super();
		this.email = email;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.mob_no = mob_no;
		this.dob = dob;
		this.gender = gender;
		this.address = address;
		this.pincode = pincode;
		this.role = role;
	}
	
	
	
	
	
}
