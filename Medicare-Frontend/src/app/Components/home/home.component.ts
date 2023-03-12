import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public router: Router) { }
  name!: string;
  medicine: string[] = ['Anti Hypertensives', 'Anti Diabetic', 'Gastro Intestinal', 'Urology', 'Anti Infectives', 'Gynaecological', 'Analgesics', 'Vitamins'];
  onSearch(name: string) {
    if (name != undefined) {
      console.log('navigating to search url');
      let url = "/user/search/product/" + name;
      this.router.navigateByUrl(url);
    } else {
      console.log('please enter a name');
    }
  }

}
