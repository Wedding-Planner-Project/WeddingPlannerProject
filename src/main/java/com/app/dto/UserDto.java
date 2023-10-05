package com.app.dto;

import java.time.LocalDate;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import com.app.model.Address;
import com.app.model.Gender;
import com.app.model.Role;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@JsonInclude(content = Include.NON_NULL)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    @NotEmpty(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotEmpty(message = "Password is required")
    private String password;

    private String first_name;
    private String last_name;
    private Long mob_no;
    private LocalDate dob;
    private Gender gender;
    private Address address;
    private Role role;

    public UserDto(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
