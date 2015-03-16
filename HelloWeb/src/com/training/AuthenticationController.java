package com.training;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

	@RequestMapping(value = "/auth", method=RequestMethod.POST)  
	public String authenticate(@RequestBody AuthUser user) {
		
		if(user.username == "James") {
			return "true";
		}
		
		return "false";
	}
}
