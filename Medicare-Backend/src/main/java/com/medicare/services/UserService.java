package com.medicare.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.medicare.entities.User;
import com.medicare.entities.UserRole;
import com.medicare.repo.RoleRepo;
import com.medicare.repo.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private RoleRepo roleRepo;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	//register a new user
	public User createUser(User user, Set<UserRole> userRole){
		User newUser = this.userRepo.findByUsername(user.getUsername());
		//if user exists or not
		try {
			if(newUser!=null) {
				throw new Exception("Username already exists!");
			}else {
				//create new user
				
				//saving roles
				for(UserRole uR : userRole) {
					this.roleRepo.save(uR.getRole());
				}
				//setting userRole in user
				user.getUserRoles().addAll(userRole);
				
				//encoding password
				user.setPassword(this.passwordEncoder.encode(user.getPassword()));
				
				newUser = this.userRepo.save(user);
				
			}
		} catch (Exception e) {
			System.out.println("User is already created!");
			System.out.println(e);
		}
		
		return newUser;
	}
	
	public User getByUsername(String username) {
		User user = this.userRepo.findByUsername(username);
		return user;
	}
	
	

}
