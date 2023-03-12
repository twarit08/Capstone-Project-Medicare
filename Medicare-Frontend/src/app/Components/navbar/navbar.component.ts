import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(public loginService: LoginService, private router: Router, private cartService: CartService) {

  }
  ngOnInit(): void {
    this.updateCartStatus();
  }

  logout() {
    this.loginService.logout();
    window.location.reload();
  }
  home() {
    if (this.loginService.getUserRole() == 'USER') {
      this.router.navigate(['/user-home']);
    } else if (this.loginService.getUserRole() == 'ADMIN') {
      this.router.navigate(['/admin-dashboard']);
    }

  }

  updateCartStatus() {
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
  }



}
