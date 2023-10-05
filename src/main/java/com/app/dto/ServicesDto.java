package com.app.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@JsonInclude(content = Include.NON_NULL,value = Include.NON_NULL)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServicesDto {
	private Integer id;
	private String servName;
	private String serv_desc;
	private Double serv_price;
	private LocalDate creatn_date;
	private LocalDate mod_date;
	private String first_name;
	private String cmp_name;
	private Integer pincode;
	private String city;
	private String state;
	private Long mob_no;
	private String email;
	
	
//	private Integer count;
	
	
	
	
	public ServicesDto(String servName, String serv_desc, Double serv_price) {
		super();
		this.servName = servName;
		this.serv_desc = serv_desc;
		this.serv_price = serv_price;
	}
	
	public ServicesDto(String servName, String serv_desc, Double serv_price, LocalDate creatn_date, String first_name,
			String cmp_name, Integer pincode, String city, String state, Long mob_no, String email) {
		super();
		this.servName = servName;
		this.serv_desc = serv_desc;
		this.serv_price = serv_price;
		this.creatn_date = creatn_date;
		this.first_name = first_name;
		this.cmp_name = cmp_name;
		this.pincode = pincode;
		this.city = city;
		this.state = state;
		this.mob_no = mob_no;
		this.email = email;
	}

	public ServicesDto(String servName, String serv_desc, Double serv_price, LocalDate creatn_date,
			LocalDate mod_date) {
		super();
		this.servName = servName;
		this.serv_desc = serv_desc;
		this.serv_price = serv_price;
		this.creatn_date = creatn_date;
		this.mod_date = mod_date;
	}
	


	public ServicesDto(String servName) {
		super();
		this.servName = servName;
	}

	public ServicesDto(String servName, String serv_desc, Double serv_price, LocalDate creatn_date, LocalDate mod_date,
			String first_name, String cmp_name, Integer pincode, String city, String state, Long mob_no, String email) {
		super();
		this.servName = servName;
		this.serv_desc = serv_desc;
		this.serv_price = serv_price;
		this.creatn_date = creatn_date;
		this.mod_date = mod_date;
		this.first_name = first_name;
		this.cmp_name = cmp_name;
		this.pincode = pincode;
		this.city = city;
		this.state = state;
		this.mob_no = mob_no;
		this.email = email;
	}

	public ServicesDto(Integer id, String servName, String serv_desc, Double serv_price, LocalDate creatn_date,
			String first_name, String cmp_name, Integer pincode, String city, String state, Long mob_no, String email) {
		super();
		this.id = id;
		this.servName = servName;
		this.serv_desc = serv_desc;
		this.serv_price = serv_price;
		this.creatn_date = creatn_date;
		this.first_name = first_name;
		this.cmp_name = cmp_name;
		this.pincode = pincode;
		this.city = city;
		this.state = state;
		this.mob_no = mob_no;
		this.email = email;
	}

	
	
	
	
	
	
	
}
