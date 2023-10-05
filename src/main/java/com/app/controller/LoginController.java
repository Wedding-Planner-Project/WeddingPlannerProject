package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.app.dto.UserDto;
import com.app.service.IUserService;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/login")
@Validated  // Enable validation
public class LoginController {

    @Autowired
    private IUserService userService;

    @PostMapping
    public Object authorizeUser(@RequestBody @Valid UserDto userDto, BindingResult result) {
        if (result.hasErrors()) {
            // Handle validation errors here
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return errors; // Return a map of field names and error messages
        }

        UserDto authUser = userService.authUser(userDto);
        return authUser;
    }
}
