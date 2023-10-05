package com.app.dto;

import java.time.LocalDate;

import com.app.model.Read;
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
public class MailBoxDto {
	private Integer id;
	private String custEmail;
	private String vendEmail;
	private String sender;
	private LocalDate sentDate;
	private String message;
	private Read readStatus = Read.UNREAD;
	
	
	
	public MailBoxDto(String custEmail, String vendEmail, String message) {
		super();
		this.custEmail = custEmail;
		this.vendEmail = vendEmail;
		this.message = message;
	}



	public MailBoxDto(String custEmail, String vendEmail, String sender, LocalDate sentDate, String message,
			Read readStatus) {
		super();
		this.custEmail = custEmail;
		this.vendEmail = vendEmail;
		this.sender = sender;
		this.sentDate = sentDate;
		this.message = message;
		this.readStatus = readStatus;
	}
	
	
	
	
	
	
	
	
	
	
}
