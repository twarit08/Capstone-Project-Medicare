package com.medicare.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;


@Entity
public class UserOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long oid;
	private String username;
	private String firstName;
	private String lastName;
	private String address;
	private String district;
	private int pinCode;
	private String state;
	private String contact;
	private String date;
	private String status;
	private Double paidAmount;
	private String paymentMode;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private Set<ProductQuantity> products = new HashSet<>();
	
	public UserOrder() {
		
	}
	
	public UserOrder(Long oid, String username, String firstName, String lastName, String address, String district,
			int pinCode, String state, String contact, String date, String status, Double paidAmount, String paymentMode,
			Set<ProductQuantity> products) {
		super();
		this.oid = oid;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.district = district;
		this.pinCode = pinCode;
		this.state = state;
		this.contact = contact;
		this.date = date;
		this.status = status;
		this.paidAmount = paidAmount;
		this.paymentMode = paymentMode;
		this.products = products;
	}



	public Long getOid() {
		return oid;
	}
	public void setOid(Long oid) {
		this.oid = oid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public int getPinCode() {
		return pinCode;
	}
	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	
	public Set<ProductQuantity> getProducts() {
		return products;
	}

	public void setProducts(Set<ProductQuantity> products) {
		this.products = products;
	}

	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Double getPaidAmount() {
		return paidAmount;
	}
	public void setPaidAmount(Double paidAmount) {
		this.paidAmount = paidAmount;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	
}
