import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderSummary } from 'src/app/order-summary';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  oid!: number;
  orderInvoice: OrderSummary = new OrderSummary();

  constructor(private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit(): void {
    this.oid = this.route.snapshot.params['oid'];
    this.getOrderConfirmation();
  }

  getOrderConfirmation() {
    this.userService.getOrderById(this.oid).subscribe({
      next: (data) => {
        this.orderInvoice = data;
        this.orderInvoice.products.forEach((p) => {
          p.product.img = 'data:image/jpeg;base64,' + p.product.productImage.imageData;
        })
      }, error: (error) => {
        console.log(error);
      }
    })
  }


}
