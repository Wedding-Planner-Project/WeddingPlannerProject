package com.app.service;

import java.util.List;
import java.util.Set;

import com.app.dto.MailBoxDto;

public interface IMailService {

	String sendMessage(MailBoxDto mail, String uid);

	Set<MailBoxDto> getMessages(String cid);

	Set<MailBoxDto> getVMessages(String vid);

	Set<String> getCustomerChats(String cid);
	
	Set<String> getVendorChats(String vid);

	Set<MailBoxDto> getCandVChats(String cid, String vid);
	
}
