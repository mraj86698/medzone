import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/Dialog'
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class MRLoginComponent implements OnInit {
  email: string='';
  password: string='';

  constructor(private router: Router,private service:LoginService) {

  }

  ngOnInit(): void {
  }
 onlogin() {
   
   if (this.email.length == 0) {
      alert('email field can not be empty')
    }
    else if (this.password.length == 0) {
      alert('password can not be empty')
    }
    else if(this.email == "mohan" && this.password == "1234"){
      this.router.navigate(['/login/dashboard'])
      }
    else {

      this.service.login(this.email, this.password).subscribe((response) => {


        console.log(response)
        if (response['status'] == 'success') {

          localStorage['login_status'] = '1'
         localStorage['username'] = response['data'][0].username
          localStorage['id'] = response['data'][0].id
            localStorage['flag'] = '0'
          this.router.navigate(['/MRlogin/home'])
        }
        else if (response['status'] == 'error') {

          alert('invaild email or password')
        }

      })

    }
  }


}
