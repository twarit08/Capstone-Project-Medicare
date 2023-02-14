package com.medicare.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.medicare.entities.User;
import com.medicare.repo.UserRepo;

@Service
public class UserDetailService implements UserDetailsService{
	
	@Autowired
	private UserRepo userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = this.userRepo.findByUsername(username);
		if(user == null) {
			System.out.println("User not found!");
			throw new UsernameNotFoundException("User does not exist!");
		}
		return user;
	}

}
