import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { authInterceptorProviders } from './Services/auth.interceptor';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { UserHomeComponent } from './Components/User/user-home/user-home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserSignupComponent } from './Components/user-signup/user-signup.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { ShowAllProductsComponent } from './Components/Admin/show-all-products/show-all-products.component';
import { UpdateProductComponent } from './Components/Admin/update-product/update-product.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchProductComponent } from './Components/search-product/search-product.component';
import { GetProductComponent } from './Components/get-product/get-product.component';
import { CartDetailsComponent } from './Components/cart-details/cart-details.component';
import { OrderDetailsComponent } from './Components/User/order-details/order-details.component';
import { OrderConfirmationComponent } from './Components/User/order-confirmation/order-confirmation.component';
import { AllOrdersComponent } from './Components/Admin/all-orders/all-orders.component';
import { AllUserOrdersComponent } from './Components/User/all-user-orders/all-user-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    UserHomeComponent,
    NavbarComponent,
    UserSignupComponent,
    AddProductComponent,
    ShowAllProductsComponent,
    UpdateProductComponent,
    HomeComponent,
    SearchProductComponent,
    GetProductComponent,
    CartDetailsComponent,
    OrderDetailsComponent,
    OrderConfirmationComponent,
    AllOrdersComponent,
    AllUserOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
