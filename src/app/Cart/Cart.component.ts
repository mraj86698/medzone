import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartProductDetailsService } from '../CartProductDetails/CartProductDetails.component.service';

import { ProductDetailsService } from '../product_details/product_details.component.service';
//import { SnackService } from '../snack.service';
import { CartService } from './Cart.component.service';

@Component({
    selector: 'product_details',
    templateUrl: './Cart.component.html',
    styleUrls: ['./Cart.component.css']
})


export class CartComponent implements OnInit {

    Cart:any
    cartCount:number=0;
    TotalAmountOfProduct:number = 0;
    TotalSaved:number = 0;
    msg:String
    id = localStorage['id']
    empty: boolean
    
    constructor(private service:CartService,
        private activateRoute:ActivatedRoute,
        //private snackService:SnackService,
        private prodservice:CartProductDetailsService,
        private route:Router) {
      
         
        this.loadProduct()

     }

    loadProduct()
    {
        this.service.getCart(this.id).subscribe(response =>{
            if(response['status'] == 'success'){
                this.Cart = response['data']
                 //TO GET TOTAL MONEY AND SAVING
        
                if(this.Cart.length == 0){
                    this.msg = 'your cart is empty'
                    this.empty = true
                }
                else{
                    this.msg = 'your items list'
                    this.empty = false
                }
                for(let i = 0;i < this.Cart.length;i++)
                {
                    this.TotalAmountOfProduct = this.TotalAmountOfProduct + this.Cart[i].totalAmount
                    this.TotalSaved = this.TotalSaved + this.Cart[i].totalDiscount
                    this.cartCount=this.cartCount+this.Cart[i].Quantity
                    localStorage.setItem("cartcount",this.cartCount.toString());
                    //this.snackService.sendNumber(this.cartCount)
                
                } 
                

            }
            else{
                console.log(response['error'])
            }
        })
    }
    
    onEdit(id:number,tableid:number,quantity:number) {
        localStorage['orderDetailsTableID'] = tableid
        localStorage['Quantity'] = quantity
        this.route.navigate(['/MRlogin/cartEdit/'+id])
      }

       onDelete(id:number) {
        this.prodservice.DeleteCart(id);
         this.route.navigate(['/MRlogin/cartDelete/'+id])
      }
   
    onOrderPlace(){
            this.route.navigate(['/MRlogin/cart/placeorder'])   
    }

    ngOnInit() { 

        if(localStorage['login_status'] != '1'){
            alert('you are not logged in')
            this.route.navigate(['login'])
        }
    }

    
}

