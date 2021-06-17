import { Component, OnInit } from '@angular/core';
import { EditProductService } from './edit_product.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { SnackService } from '../snack.service';
@Component({
    selector: 'edit_product-app',
    templateUrl: './edit_product.component.html',
    styleUrls: ['./edit_product.component.css']
})


export class Edit_productComponent implements OnInit {
  md1=''
  m1:number;
  s1:any;
  a1=''
  days1:any
  year1=''
  month1=''
  date1=''

  md2=''
  m2:number;
  s2:any;
  a2=''
  days2:any
  year2=''
  month2=''
  date2=''

  cat = []
  categoryid = 0
  name = ''
  price = 0
  discount = 0
  priceWithDiscount = 0
  doseInMG = 0
  mgfdate = null
  expiredate = null
  description = ''
  id = 0


    constructor(
        private service: EditProductService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        //private snackservice:SnackService,
        private catservice: EditProductService) {

            this.id = this.activatedRoute.snapshot.params['id']

            if(this.id)
            {
                this.service.getUserDetails(this.id).subscribe(response =>{
                    if(response['status']=='success')
                    {
            
                        const user = response['data']

                        this.name = user[0].name
                        this.price = user[0].price
                        this.discount = user[0].discount
                        this.priceWithDiscount = user[0].priceWithDiscount
                        this.doseInMG = user[0].doseInMG
                        this.md1 = user[0].mgfdate
                        this.s1=this.md1.split("T")
                        this.days1=this.s1[0].split("-")
                        this.year1=this.days1[0]
                        this.month1=this.days1[1]
                        this.date1=(parseInt(this.days1[2])+1).toString();
                        if(parseInt(this.date1)<10)
                        {
                             this.date1="0"+this.date1;
                        }
                        else
                        {
                          this.date1=this.date1;
                        }
                        this.m1=parseInt(this.date1)+1;
                        
                        this.md2 = user[0].expiredate
                        this.s2=this.md2.split("T")
                        this.days2=this.s2[0].split("-")
                        this.year2=this.days2[0]
                        this.month2=this.days1[1]
                        this.date2=(parseInt(this.days2[2])+1).toString();
                        if(parseInt(this.date2)<10)
                        {
                             this.date2="0"+this.date2;
                        }
                        else
                        {
                          this.date2=this.date2;
                        }
                        this.m2=parseInt(this.date2)+1;
                        
                        this.mgfdate=this.year1+"-"+this.month1+"-"+this.date1;                       
                         this.expiredate=this.year2+"-"+this.month2+"-"+this.date2; 
                        //this.mgfdate = user[0].mgfdate
                        //this.expiredate = user[0].expiredate
                        this.description = user[0].description
                    }
                    else{
                        console.log(response['error'])
                    }
                })
            }
         }

    ngOnInit() {
      this.loadCategories()
     }



    loadCategories(){
      this.catservice.getCategories().subscribe(response =>{
          if(response['status']=='success')
          {
              this.cat = response['data']
             
              if(this.cat.length > 0)
                this.categoryid = this.cat[0].id
          }
      })
  }


    onUpdate() {
        this.service
          .edit_Product(this.name, this.price, this.discount, this.priceWithDiscount, this.doseInMG, this.mgfdate, this.expiredate,this.description,this.categoryid, this.id)
          .subscribe(response => {
            if (response['status'] == 'success') {
                alert('product-updated')
                //this.snackservice.openSnackBar('product','updated')
              //this.router.navigate(['/login/dashboard/product'])
            } else {
                console.log(response['error'])
                alert("error")
              //toastr.error(response['error'])
            }
          })
      }
}

