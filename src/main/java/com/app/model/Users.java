package com.app.model;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Collections;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user_tbl")
public class Users extends BaseEntity{
	@Column(length=30, unique = true)
	private String email;
	@Column(length=30)
	private String password;
	@Column(length=30)
	private String first_name;
	@Column(length=30)
	private String last_name;
	private Long mob_no;
	private LocalDate dob;
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@OneToOne
	@JoinColumn(name="pincode")
	private Address address;
	@Enumerated(EnumType.STRING)
	private Role role;
	
	
	public User toUser() {
		if(id > 0) {
			GrantedAuthority auth = new SimpleGrantedAuthority(role.name());
			return new User(email, password, Collections.singleton(auth));
		}
		return null;
	}
}
