import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  user: User = new User();
  isValid!: boolean;
  message!: string;

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.userSignUp(this.user).subscribe({
      next: (response) => {
        this.isValid = true;
        this.message = 'Successfully Registered! Sign In to Continue!';
      }, error: (error) => {
        console.log(error);
        this.isValid = false;
        this.message = 'E-mail address already exists!';
      }
    })

  }

  onClick() {
    this.router.navigate(['/user/login']);
  }
}
