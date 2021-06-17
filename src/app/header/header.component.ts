import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @Input() deviceXs: boolean;
  isLoggedIn = false

  username:String
  search: String
  status = localStorage['login_status']
  
  constructor(private router:Router)
  {
    this.loadStatus()
  }
  //  ngAfterViewInit(): void {
  //    console.log(this.child);
  // }

  canActivate()
  {  
      this.loadStatus()
      return true
  }

 // status = localStorage['login_status']
  

  loadStatus()
  {
      if(this.status == '1')
      {
        this.isLoggedIn = true
        this.username = localStorage['username']
      }
  }

  
  onLogout()
  {
    if(confirm('Are you sure to log out'))
    {
      this.isLoggedIn = false
      localStorage['login_status'] = '0'
      localStorage['username'] = null
      localStorage['id'] = null

      this.router.navigate(['/MRlogin'])
    }
  }

  onSearch()
  {
    localStorage['searchValue'] = this.search

    this.router.navigate(['/MRlogin/search'])
  }

  onLogin()
  {
    console.log('login success');
  }
  

}
