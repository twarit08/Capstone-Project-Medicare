import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  pid!: number;
  product: Product = new Product();
  isValid!: boolean;
  message!: string;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.pid = this.route.snapshot.params['pid'];
    this.getProduct();
  }

  getProduct() {
    this.userService.findById(this.pid).subscribe({
      next: (data) => {
        this.product = data;
      }, error: (error) => {
        console.log(error);
      }
    })
  }

  updateProduct() {
    this.userService.updateMedicine(this.pid, this.product).subscribe({
      next: (data) => {
        this.isValid = true;
        this.message = 'Medicine details updated successfully!';
      }, error: (error) => {
        this.isValid = false;
        this.message = 'Something went wrong!';
      }
    })
  }

  onClick() {
    this.router.navigate(['/admin/get/all/medicines']);
  }




}
