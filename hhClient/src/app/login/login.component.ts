// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//
// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import {User} from "../user";
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private adminDetail = new User(0,"","","","",0,"","","");

  constructor(private adminService : AdminService, private router : Router) { }

  ngOnInit() {
    if((this.adminService.isLoggedIn()) )
    {
      this.router.navigate(['/profile' , localStorage.getItem('id')]);
    }
    else
    {
      this.router.navigate(['/login']);
    }
  }

  // create the form object.
  form = new FormGroup({
    email : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required)
  });

  Login(LoginInformation:any)
  {
    this.adminDetail.email = this.Email?.value ?? '';
    this.adminDetail.password = this.Password?.value ?? '';

    this.adminService.login(this.adminDetail).subscribe(
      response  => {
        let result =  response;
        console.log("response",response);

        if(result > 0)
        {
          // let token = response.headers.get("Authorization");
          let token =response && response.headers ? response.headers.get("Authorization") : null;
          // console.log("token:",token);

          localStorage.setItem("token" , token);
          localStorage.setItem("id" , result);
          console.log("token",token);
          this.router.navigate(['/home', result]);
        }
        if(result == -1)
        {
          alert("please register before login Or Invalid combination of Email and password");
        }

      },
      error => {
        console.log("Error in authentication");
      }
    );
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

}
