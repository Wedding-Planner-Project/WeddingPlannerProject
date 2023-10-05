package com.app.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.dto.MailBoxDto;
import com.app.model.Customer;
import com.app.model.MailBox;
import com.app.model.Users;
import com.app.model.Vendor;
import com.app.repo.AddressRepo;
import com.app.repo.CartRepo;
import com.app.repo.CustomerRepo;
import com.app.repo.MailRepo;
import com.app.repo.ServDetlRepo;
import com.app.repo.ServiceRepo;
import com.app.repo.UserRepo;
import com.app.repo.VendorRepo;

@Service
public class MailService implements IMailService {

	@Autowired
	CustomerRepo customerRepo;

	@Autowired
	ServDetlRepo servdetRepo;

	@Autowired
	ServiceRepo servRepo;

	@Autowired
	UserRepo userRepo;

	@Autowired
	AddressRepo addressRepo;

	@Autowired
	CartRepo cartRepo;

	@Autowired
	VendorRepo vendorRepo;

	@Autowired
	MailRepo mailRepo;
	
	

	@Override
	public String sendMessage(MailBoxDto mail, String uid) {
		Customer customer = customerRepo.findByUserEmail(mail.getCustEmail());
		Vendor vendor = vendorRepo.findByUserEmail(mail.getVendEmail());
		Users sender = userRepo.findByEmail(uid);

		MailBox message = new MailBox(customer, vendor, sender, mail.getMessage(), mail.getReadStatus());

		mailRepo.save(message);

		return "true";

	}

	@Override
	public Set<MailBoxDto> getMessages(String cid) {
		Customer customer = customerRepo.findByUserEmail(cid);
		List<MailBox> mails = mailRepo.findByCustomer(customer);
		Set<MailBoxDto> messages = new LinkedHashSet<MailBoxDto>();
		mails.sort((m1, m2) -> m1.getId() - m2.getId());

		mails.forEach(m -> messages
				.add(new MailBoxDto(m.getId(), m.getCustomer().getUser().getEmail(), m.getVendor().getUser().getEmail(),
						m.getSender().getEmail(), m.getSentDate(), m.getMesg(), m.getReadStatus())));

		return messages;

	}

	@Override
	public Set<MailBoxDto> getVMessages(String vid) {
		Vendor vendor = vendorRepo.findByUserEmail(vid);
		List<MailBox> mails = mailRepo.findByVendor(vendor);

		mails.sort((m1, m2) -> m1.getId() - m2.getId());

		Set<MailBoxDto> messages = new LinkedHashSet<MailBoxDto>();

		mails.forEach(m -> messages
				.add(new MailBoxDto(m.getId(), m.getCustomer().getUser().getEmail(), m.getVendor().getUser().getEmail(),
						m.getSender().getEmail(), m.getSentDate(), m.getMesg(), m.getReadStatus())));
		return messages;

	}

	@Override
	public Set<String> getCustomerChats(String cid) {
		List<MailBox> mails = mailRepo.findByCustomerUserEmail(cid);
		Set<String> chats = new HashSet<String>();
		mails.forEach(m -> chats.add(new String(m.getVendor().getUser().getEmail())));

		return chats;
	}

	@Override
	public Set<String> getVendorChats(String vid) {
		List<MailBox> mails = mailRepo.findByVendorUserEmail(vid);
		Set<String> chats = new HashSet<String>();
		mails.forEach(m -> chats.add(new String(m.getCustomer().getUser().getEmail())));

		return chats;
	}

	@Override
	public Set<MailBoxDto> getCandVChats(String cid, String vid) {
		List<MailBox> mails = mailRepo.findByCustomerUserEmailAndVendorUserEmail(cid, vid);

		mails.sort((m1, m2) -> m1.getId() - m2.getId());

		Set<MailBoxDto> messages = new LinkedHashSet<MailBoxDto>();

		mails.forEach(m -> messages
				.add(new MailBoxDto(m.getId(), m.getCustomer().getUser().getEmail(), m.getVendor().getUser().getEmail(),
						m.getSender().getEmail(), m.getSentDate(), m.getMesg(), m.getReadStatus())));
		return messages;

	}

}
