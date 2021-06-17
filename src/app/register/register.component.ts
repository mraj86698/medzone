import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string =''
  firstname: string =''
  lastname: string =''
  //joindate: string = ''
  phoneno: string =''
  email: string = ''
  password: string =''
 
  constructor(private router: Router,
    private service: RegisterService) {
      
     }
  
  ngOnInit(): void {
  }
  onadd()
  {
      if(this.username.length == 0){
          alert('username is required')
      }
      else if(this.firstname.length == 0){
          alert('firstname is required')
      }
      else if(this.lastname.length == 0){
          alert('lastname is required')
      }
      else if(this.phoneno.length == 0){
          alert('phone number is required')
      }
      else if(this.email.length == 0){
          alert('email is required')
      }
      else if(this.password.length ==0){
          alert('password is required')
      }
      else{

      

      this.service.addUsers(this.username,this.firstname,this.lastname,this.phoneno,this.email,this.password).subscribe((response)=>{
              if(response['status']=='success')
              {
                  alert('you have successfully register')
                  this.router.navigate(['/login'])
              }
              else
              {
                  console.log(response['error'])
                  alert('error')
              }
          })

      }
  }

}
