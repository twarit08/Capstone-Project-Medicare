package com.medicare.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicare.entities.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long>{

}
