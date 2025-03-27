package com.example.Midterm_App;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class sampleController {

	@RequestMapping("/")
	public String welcomeMessage() {
		return "Hi how are you, this is from Spring Boot";
	}

}
