import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-all-user-orders',
  templateUrl: './all-user-orders.component.html',
  styleUrls: ['./all-user-orders.component.css']
})
export class AllUserOrdersComponent implements OnInit {
  username!: string;
  orders: any[] = [];
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.getAllOrders();
  }

  getAllOrders() {
    this.userService.getOrderByUsername(this.username).subscribe({
      next: (data) => {
        this.orders = data;
      }, error: (error) => {
        console.log(error);
        alert('No Orders found');
      }
    })
  }
  getOrderDetails(oid: number) {
    let url = '/order-confirmation/invoice/' + oid;
    this.router.navigateByUrl(url);
  }





}
