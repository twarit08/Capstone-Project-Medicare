package com.medicare.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entities.Product;
import com.medicare.repo.ProductRepo;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepo productRepo;
	
	// add product
	public Product addProduct(Product product) {
		return this.productRepo.save(product);
	}

}
