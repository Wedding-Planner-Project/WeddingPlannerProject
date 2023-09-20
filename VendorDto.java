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
public class VendorDto {
    
    @NotEmpty(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

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

    private Role role = Role.ROLE_VENDOR;

    @NotEmpty(message = "Company name is required")
    private String cmp_name;

    public VendorDto(String email, String password, String first_name, String last_name, Long mob_no, LocalDate dob,
            Gender gender, Integer pincode, String cmp_name) {
        super();
        this.email = email;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.mob_no = mob_no;
        this.dob = dob;
        this.gender = gender;
        this.pincode = pincode;
        this.cmp_name = cmp_name;
    }

    public VendorDto(String password, String first_name, String last_name, Long mob_no, LocalDate dob, Gender gender,
            Integer pincode, String cmp_name) {
        super();
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.mob_no = mob_no;
        this.dob = dob;
        this.gender = gender;
        this.pincode = pincode;
        this.cmp_name = cmp_name;
    }
}
