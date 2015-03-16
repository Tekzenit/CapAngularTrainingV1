package com.training;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/customers")
public class CustomerController {

	@RequestMapping(value = "/{customerId}", method=RequestMethod.GET, produces="application/json")  
	public String getCustomer(@PathVariable( "customerId" ) int customerId ){ 
		return  "{      \"id\":123,      \"firstName\":\"James\",      \"lastName\":\"Franco\",      \"email\":\"jfrancoisawesome@slate.com\",      \"creditcards\":[        {          \"id\":\"1\",          \"number\":\"3553182970515913\",          \"userId\":123,          \"image\":\"bankcard.png\",          \"type\":\"Bank Card\",          \"totalRewardPoints\":23220,          \"pastMonthPoints\":422,          \"currentPoints\":506,          \"currentBalance\":4965.07,          \"previousStatement\":6897.93        },        {          \"id\":\"2\",          \"number\":\"5610352347398865\",          \"userId\":123,          \"image\":\"sparkbusinesscard.png\",          \"type\":\"Spark Business\",          \"totalRewardPoints\":12900,          \"pastMonthPoints\":505,          \"currentPoints\":539,          \"currentBalance\":28615.97,          \"previousStatement\":45550.82        },        {          \"id\":\"3\",          \"number\":\"676289687986680406\",          \"userId\":123,          \"image\":\"quicksilvercard.png\",          \"type\":\"Quicksilver\",          \"totalRewardPoints\":818,          \"pastMonthPoints\":639,          \"currentPoints\":701,          \"currentBalance\":434.88,          \"previousStatement\":1369.28        },        {          \"id\":\"4\",          \"number\":\"58933071353129142\",          \"userId\":123,          \"image\":\"venturecard.png\",          \"type\":\"Venture\",          \"totalRewardPoints\":975,          \"pastMonthPoints\":596,          \"currentPoints\":632,          \"currentBalance\":7763.49,          \"previousStatement\":3538.56        }      ]    }";
		
	}
	
	@RequestMapping(value = "", method=RequestMethod.GET, produces="application/json")  
	public String getAllCustomers(){ 
		return "[" + getCustomer(123) + "]";
	}
}
