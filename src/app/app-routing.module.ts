import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MRLoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AllopathicComponent } from './allopathic/allopathic.component';
import { AyurvedicComponent } from './ayurvedic/ayurvedic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product_list/product_list.component';
import { Add_productComponent } from './add_product/add_product.component';
import { Edit_productComponent } from './edit_product/edit_product.component';
import { AllOrderListComponent } from './AllOrderList/AllOrderList.component';
//import { AppComponent } from './app.component';
import { UserHomeComponent } from './user_home/user_home.component';
import { ProductDetailsComponent } from './product_details/product_details.component';
import { CartComponent } from './Cart/Cart.component';
import { CartProductDetailsComponent } from './CartProductDetails/CartProductDetails.component';
import { UserOrdersComponent } from './UserOrders/UserOrders.component';
import { SearchProductComponent } from './SearchProduct/SearchProduct.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MROrderListComponent } from './MRorders/MRorders.component';
import { UserOrderListComponent } from './UserOrderList/UserOrderList.component';

const router: Routes = [
 // { path: 'user', component: UserComponent },
 { path: '', redirectTo: '/MRlogin/home', pathMatch: 'full' },
  { path: 'login', component: MRLoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'login/dashboard/userlogin',component:UserLoginComponent},
  
  {path:'allopathic',component:AllopathicComponent},
  {path:'ayurvedic',component:AyurvedicComponent},
  {path: 'login/dashboard', component: DashboardComponent},
  {path: 'login/dashboard/product',component: ProductComponent},
  {path: 'login/dashboard/product/add_product',component: Add_productComponent},
  {path: 'login/dashboard/product/edit_product/:id',component: Edit_productComponent },
  {path: 'MRlogin/dashboard/orders', component: AllOrderListComponent},
  {path: 'MRlogin/home', component: UserHomeComponent}, 
  {path: 'MRlogin/product_details/:id', component: ProductDetailsComponent},
  {path: 'MRlogin/cart', component: CartComponent},
  {path: 'MRlogin/cartEdit/:id', component: CartProductDetailsComponent},
  {path: 'MRlogin/cartDelete/:id', component: CartComponent},
  {path: 'MRlogin/cart/placeorder', component: UserOrdersComponent},
  {path: 'MRlogin/search', component: SearchProductComponent},
  {path: 'MRlogin/dashboard/MRorders/:id', component: MROrderListComponent},
  {path: 'MRlogin/orders', component: UserOrderListComponent},
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
