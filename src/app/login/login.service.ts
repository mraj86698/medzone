import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  url = 'http://localhost:4000/MRlogin'   //express port 4000
  http:HttpClient
  constructor(httpClient: HttpClient) {
    this.http = httpClient
   }
  
   login(email:String, password:String)
     {
        const body ={
             email:email,
             password:password
         }

         return this.http.post(this.url,body)
     }
}
