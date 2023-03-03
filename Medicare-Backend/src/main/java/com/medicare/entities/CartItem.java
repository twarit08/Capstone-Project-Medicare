package com.medicare.entities;

public class CartItem {
	
	private Long pid;
	private int quantity;
	public CartItem() {
		
	}
	public CartItem(Long pid, int quantity) {
		super();
		this.pid = pid;
		this.quantity = quantity;
	}
	public Long getPid() {
		return pid;
	}
	public void setPid(Long pid) {
		this.pid = pid;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	

}
