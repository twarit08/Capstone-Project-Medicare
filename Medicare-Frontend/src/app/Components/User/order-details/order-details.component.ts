import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cart-item';
import { OrderDetails } from 'src/app/order-details';
import { OrderItem } from 'src/app/order-item';
import { CartService } from 'src/app/Services/cart.service';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails: OrderDetails = new OrderDetails();
  cartItems: CartItem[] = [];
  orderItem: OrderItem[] = [];
  paidAmount: number = 0;
  username!: string;
  constructor(private cartService: CartService, private loginService: LoginService, private userService: UserService) { }
  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    for (let cartItems of this.cartItems) {
      let items: OrderItem = new OrderItem();
      items.pid = cartItems.pid;
      items.quantity = cartItems.quantity;
      this.orderItem.push(items);
    }
    this.cartService.totalPrice.subscribe(data => this.paidAmount = data);
    this.username = this.loginService.getUserDetails().username;
    this.cartService.calculateTotalPrice();
    this.orderDetails.username = this.username;
    this.orderDetails.paidAmount = this.paidAmount;
    this.orderDetails.paymentMode = "CARD-PAYMENT";
    this.orderDetails.cartItem = this.orderItem;
  }

  onSubmit() {
    this.userService.createOrder(this.orderDetails).subscribe({
      next: (data) => {
        window.location.href = "/order-confirmation/invoice/" + data.oid;
      }, error: (error) => {
        console.log(error);
      }
    })

  }



}
