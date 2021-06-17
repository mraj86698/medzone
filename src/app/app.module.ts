import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule}from '@angular/material/form-field';
import{MatSelectModule} from '@angular/material/select' ;

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

import {MatNativeDateModule}from  '@angular/material/core';
import{MatDatepickerModule}from  '@angular/material/datepicker';
import {MatCheckboxModule}from  '@angular/material/checkbox';
import{MatRadioModule} from  '@angular/material/radio';
import {HttpClientModule} from '@angular/common/http';
//import { MatSnackBar } from '@angular/material/snack-bar';
//import {MatMomentDateModule} fron '@angular/material/momentdate';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './content/content.component';
import { MRLoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './login/login.service';
import { AdminComponent } from './admin/admin.component';

import { UserHomeComponent } from './user_home/user_home.component';
import { GetProductService } from './user_home/user_home.component.service';
import { AllopathicComponent } from './allopathic/allopathic.component';

import { AyurvedicComponent } from './ayurvedic/ayurvedic.component';
import { RegisterService } from './register/register.service';
import { AllopathicService } from './allopathic/allopathic.service';
import { AyurvedicService } from './ayurvedic/ayurvedic.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product_list/product_list.component';
import { ProductService } from './product_list/product.service';
import { Add_productComponent } from './add_product/add_product.component';
import { AddProductService } from './add_product/add_product.service';
import { Edit_productComponent } from './edit_product/edit_product.component';
import { EditProductService } from './edit_product/edit_product.service';
import { AllOrderListService } from './AllOrderList/AllOrderList.service';
import { AllOrderListComponent } from './AllOrderList/AllOrderList.component';
import { ProductDetailsComponent } from './product_details/product_details.component';
import { ProductDetailsService } from './product_details/product_details.component.service';
import { CartComponent } from './Cart/Cart.component';
import { CartService } from './Cart/Cart.component.service';
import { CartProductDetailsComponent } from './CartProductDetails/CartProductDetails.component';
import { CartProductDetailsService } from './CartProductDetails/CartProductDetails.component.service';
import { UserOrdersComponent } from './UserOrders/UserOrders.component';
import { UserOrdersService } from './UserOrders/UserOrders.component.service';
import { UserOrderListComponent } from './UserOrderList/UserOrderList.component';
import { UserOrderListService } from './UserOrderList/UserOrderList.service';
import { SearchProductService } from './SearchProduct/SearchProduct.component.service';
import { SearchProductComponent } from './SearchProduct/SearchProduct.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {UserService} from './user-login/user.service';
import {MROrderListComponent} from './MRorders/MRorders.component';
import{ MRordersListService} from './MRorders/MRorders.service';

//import { ProductDetailsComponent } from './product_details/product_details.component';
//import { ProductDetailsService } from './product_details/product_details.service';
//import { SnackService } from './snack.service';
//import { CartComponent } from './cart/cart.component';
// import{HomoeopathyComponent}from './homeopathy/homoeopathy.component';
// import {HomoeopathyService} from './homeopathy/homoeopathy.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    MRLoginComponent,
    RegisterComponent,
    AdminComponent,
   UserHomeComponent,
    AllopathicComponent,
    
    AyurvedicComponent,
    DashboardComponent,
    ProductDetailsComponent,
    ProductComponent,
    Add_productComponent,
    Edit_productComponent,
    AllOrderListComponent,
    CartProductDetailsComponent,
    UserOrdersComponent,
    UserOrderListComponent,
    SearchProductComponent,
    
   // ProductDetailsComponent,
    
   CartComponent,
    
   UserLoginComponent,
   MROrderListComponent
    
  ],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    NgMatSearchBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule
    
    //MatSnackBar
    // HomoeopathyComponent
   
  ],
  providers: [LoginService,RegisterService,
    AllopathicService,AyurvedicService,ProductService,
    AddProductService,EditProductService,AllOrderListService,GetProductService,ProductDetailsService,
    CartService,CartProductDetailsService,
  UserOrdersService,UserOrderListService,SearchProductService,UserService,MRordersListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
