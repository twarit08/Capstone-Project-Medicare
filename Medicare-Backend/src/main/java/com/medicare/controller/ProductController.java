package com.medicare.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.medicare.config.ImageUtil;
import com.medicare.entities.Product;
import com.medicare.entities.ProductImage;
import com.medicare.services.ProductService;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	@PostMapping("/add/product")
	public ResponseEntity<?> addNewProduct(@RequestParam("product") String product, 
										   @RequestParam("image") MultipartFile file) throws IOException{
		
		ProductImage img = new ProductImage();
		img.setName(file.getOriginalFilename());
		img.setType(file.getContentType());
		img.setImageData(ImageUtil.compressImage(file.getBytes()));
		Product p = null;
		try {
			p = objectMapper.readValue(product,Product.class);
			p.setProductImage(img);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Request");
		}
		Product saveProduct = this.productService.addProduct(p);
		return ResponseEntity.ok(saveProduct);
	}
}
