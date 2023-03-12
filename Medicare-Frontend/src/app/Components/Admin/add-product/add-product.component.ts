import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private userService: UserService, private router: Router) { }

  product: Product = new Product();
  file!: Blob;
  isValid!: boolean;
  message!: string;

  onSubmit() {
    this.userService.addMedicine(this.product, this.file).subscribe({
      next: (response) => {
        this.isValid = true;
        this.message = "Medicine added successfully!"

      }, error: (error) => {
        this.isValid = false;
        this.message = 'Something went wrong!'
      }
    })
  }

  onChangeFileField(event: any) {
    this.file = event.target.files[0];
  }

  onClick() {
    this.router.navigate(['/admin-dashboard']);
  }

}
