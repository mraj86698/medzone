import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './product_details.component.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { SnackService } from '../snack.service';

@Component({
    selector: 'product_details',
    templateUrl: './product_details.component.html',
    styleUrls: ['./product_details.component.css']
})

export class ProductDetailsComponent implements OnInit {
    cartCount:number=0;
    product: any
    count: number = 1
    rate: number
    temp: number
    id: number
    totalDiscount: number
    MRid:number

    constructor(private service:ProductDetailsService,
        private activateRoute:ActivatedRoute,
        private cartService: ProductDetailsService,
        //private snackService:SnackService,
        private route:Router) {
      
        this.id = this.activateRoute.snapshot.params['id']
      
        if(this.id)
        {
            this.service.getProduct(this.id).subscribe(response => {
                if(response['status']=='success')
                {
                    this.product = response['data'][0]
                    this.rate = this.product.priceWithDiscount
                    this.temp = this.rate
                }
            })

        }

     }

    //  sendNumber(){
    //     this.snackService.sendNumber(this.OnIncrement());
    // }
     OnIncrement()
     {
        this.count = this.count + 1
        this.rate = this.temp * this.count
        return this.count
     }

     OnDecrement()
     {
        if(this.count == 1)
        {
            alert('Can not decrement')
        }
        else
        {
            this.count = this.count -1
            this.rate = this.temp * this.count
        }
     }
     
     onAddToCart()
     {
         if(localStorage['login_status'] == '0'){
            alert('You need to login first')
            this.route.navigate(['/MRlogin'])
         }
         else
         {
             if(confirm('Do You want to add itmes'))
             {
                this.MRid = localStorage['id']
                this.totalDiscount = (this.product.price * this.count) - this.rate

                this.cartService.postInCart(this.count,this.rate,this.totalDiscount,this.MRid,this.id)
               .subscribe(response =>{
                if(response['status'] == 'success'){
                    
                    alert('items added in your cart')
                
                //     this.cartCount=this.cartCount+this.Cart[i].Quantity
              this.cartCount=parseInt(localStorage.getItem("cartcount"))+this.count   
                //this.snackService.sendNumber(this.cartCount)
                
               
                  }
          })

         }

        }
     }

     OnOrderNow()
     {

     }
     
     OnBack()
     {
        if(localStorage['onBack'] == 'allopathic'){
            this.route.navigate(['/MRlogin/allopathic'])
        }
        else if(localStorage['onBack'] == 'ayurvedic'){
            this.route.navigate(['/MRlogin/ayurvedic'])
        }
        else if(localStorage['onBack'] == 'homo'){
            this.route.navigate(['/MRlogin/homoeopathy'])
        }
        else if(localStorage['onBack'] == 'searchProduct'){
            this.route.navigate(['/MRlogin/search'])
        }
        else{
            this.route.navigate(['/MRlogin/home'])
        }
        
     }

    ngOnInit() { }
}

