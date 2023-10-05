package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.app.dto.CustomerDto;
import com.app.dto.VendorDto;
import com.app.service.ICustomerService;
import com.app.service.IVendorService;

@CrossOrigin
@RestController
@RequestMapping("/register")
@Validated  // Enable validation for the entire controller
public class RegisterController {

    @Autowired
    IVendorService vendorService;

    @Autowired
    ICustomerService customerService;

    @PostMapping("/customer")
    public String addCustomer(@RequestBody @Valid CustomerDto custdto, BindingResult result) {
        if (result.hasErrors()) {
            // Handle validation errors here
            // You can return meaningful error responses or throw exceptions
            return "Validation errors occurred. Please check your input.";
        }

        String mesg = customerService.addCustomer(custdto);
        return mesg;
    }

    @PostMapping("/vendor")
    public String addVendor(@RequestBody @Valid VendorDto vendordto, BindingResult result) {
        if (result.hasErrors()) {
            // Handle validation errors here
            // You can return meaningful error responses or throw exceptions
            return "Validation errors occurred. Please check your input.";
        }

        String mesg = vendorService.addVendor(vendordto);
        return mesg;
    }
}
