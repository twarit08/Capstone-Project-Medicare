package com.medicare.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicare.entities.Role;

@Repository
public interface RoleRepo extends JpaRepository<Role, Long>{

}
