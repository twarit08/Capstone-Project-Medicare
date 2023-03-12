import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  username!: string;
  name!: string;
  constructor(private router: Router, private loginService: LoginService) { }
  ngOnInit(): void {
    this.username = this.loginService.getUserDetails().username;
    this.name = this.loginService.getUserDetails().firstName + ' ' + this.loginService.getUserDetails().lastName;
  }

  getOrders() {
    let url = '/user/get/all-orders/' + this.username;
    this.router.navigateByUrl(url);
  }

}
