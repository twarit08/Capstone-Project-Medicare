import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { AllOrdersComponent } from './Components/Admin/all-orders/all-orders.component';
import { ShowAllProductsComponent } from './Components/Admin/show-all-products/show-all-products.component';
import { UpdateProductComponent } from './Components/Admin/update-product/update-product.component';
import { CartDetailsComponent } from './Components/cart-details/cart-details.component';
import { GetProductComponent } from './Components/get-product/get-product.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchProductComponent } from './Components/search-product/search-product.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserSignupComponent } from './Components/user-signup/user-signup.component';
import { AllUserOrdersComponent } from './Components/User/all-user-orders/all-user-orders.component';
import { OrderConfirmationComponent } from './Components/User/order-confirmation/order-confirmation.component';
import { OrderDetailsComponent } from './Components/User/order-details/order-details.component';
import { UserHomeComponent } from './Components/User/user-home/user-home.component';
import { AdminGuard } from './Services/admin.guard';
import { UserGuard } from './Services/user.guard';

const routes: Routes = [
  { path: 'user/login', component: UserLoginComponent, pathMatch: 'full', title: 'User Login' },
  { path: 'admin/login', component: AdminLoginComponent, pathMatch: 'full', title: 'Admin Login' },
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Medicare' },
  { path: 'user-home', component: UserHomeComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Home' },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Admin Dashboard' },
  { path: 'user/signup', component: UserSignupComponent, pathMatch: 'full', title: 'User Registration' },
  { path: 'admin/add-medicine', component: AddProductComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Add Medicine' },
  { path: 'admin/get/all/medicines', component: ShowAllProductsComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'All Medicines' },
  { path: 'admin/update/medicine/:pid', component: UpdateProductComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Update Medicine' },
  { path: 'user/search/product/:name', component: SearchProductComponent, pathMatch: 'full', title: 'Search results' },
  { path: 'show/product/class/:category', component: GetProductComponent, pathMatch: 'full', title: 'All Products' },
  { path: 'get/all/class/:category', component: GetProductComponent, pathMatch: 'full', title: 'All Products' },
  { path: 'get/cart/details', component: CartDetailsComponent, pathMatch: 'full', title: 'Cart Details' },
  { path: 'user/create/order', component: OrderDetailsComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Order Details' },
  { path: 'order-confirmation/invoice/:oid', component: OrderConfirmationComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Order Confirmation' },
  { path: 'admin/all/user-orders', component: AllOrdersComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'All Orders' },
  { path: 'order/details/:oid', component: OrderConfirmationComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Order Details' },
  { path: 'user/get/all-orders/:username', component: AllUserOrdersComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Orders Placed' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
