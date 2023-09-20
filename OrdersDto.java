package com.app.dto;

import java.time.LocalDate;

import com.app.model.Status;
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
public class OrdersDto {
	
	private Integer id;
	private LocalDate creat_date;
	private LocalDate book_date;
	private Status book_status = Status.PENDING; 
	private Status order_status = Status.PENDING;
	private String servName;
	private Double serv_price;
	private String cmp_name;
	private String vEmail; //vendor email
	private String cEmail;
	
	public OrdersDto(LocalDate book_date, String servName, String cmp_name, String vEmail, String cEmail) {
		super();
		this.book_date = book_date;
		this.servName = servName;
		this.cmp_name = cmp_name;
		this.vEmail = vEmail;
		this.cEmail = cEmail;
	}

	public OrdersDto(LocalDate book_date, String servName, String vEmail, String cEmail) {
		super();
		this.book_date = book_date;
		this.servName = servName;
		this.vEmail = vEmail;
		this.cEmail = cEmail;
	}
	
	

	public OrdersDto(LocalDate book_date, Status book_status, String servName,Double serv_price, String vEmail, String cEmail) {
		super();
		this.book_date = book_date;
		this.book_status = book_status;
		this.servName = servName;
		this.serv_price = serv_price;
		this.vEmail = vEmail;
		this.cEmail = cEmail;
	}

	

	public OrdersDto(Integer id, LocalDate creat_date, LocalDate book_date, Status book_status, Status order_status,
			String servName, Double serv_price, String cEmail) {
		super();
		this.id = id;
		this.creat_date = creat_date;
		this.book_date = book_date;
		this.book_status = book_status;
		this.order_status = order_status;
		this.servName = servName;
		this.serv_price = serv_price;
		this.cEmail = cEmail;
	}

	public OrdersDto(LocalDate creat_date, LocalDate book_date, Status book_status, Status order_status,
			String servName, Double serv_price, String cmp_name, String vEmail, String cEmail) {
		super();
		this.creat_date = creat_date;
		this.book_date = book_date;
		this.book_status = book_status;
		this.order_status = order_status;
		this.servName = servName;
		this.serv_price = serv_price;
		this.cmp_name = cmp_name;
		this.vEmail = vEmail;
		this.cEmail = cEmail;
	}

	public OrdersDto(Integer id, LocalDate creat_date, LocalDate book_date, Status book_status, Status order_status,
			String servName, Double serv_price, String cmp_name, String vEmail) {
		super();
		this.id = id;
		this.creat_date = creat_date;
		this.book_date = book_date;
		this.book_status = book_status;
		this.order_status = order_status;
		this.servName = servName;
		this.serv_price = serv_price;
		this.cmp_name = cmp_name;
		this.vEmail = vEmail;
	}
	
	 
	
	


	
	
	
	
	
	
	
	
}
