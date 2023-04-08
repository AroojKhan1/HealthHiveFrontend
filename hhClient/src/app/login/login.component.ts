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
import {UserIdService} from "../user-id.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private adminDetail = new User(0,"","","","",0,"","","");

  constructor(private adminService : AdminService, private router : Router, private userIdService:UserIdService) { }

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

        const result: number =  response?.body? +response.body : 0;
        console.log("response",response);
        console.log("response.headers.get(Authorization) :",response.headers.get("Authorization"));

        if(result > 0)
        {
          // console.log("res keys", response.headers.keys());
          // let token = response.headers.keys().forEach((keyName: any) =>
          //   console.log(
          //     `The value of the ${keyName} header is: ${response.headers.get(
          //       keyName
          //     )}`
          //   )
          // );;
          const header = response.headers.get("Authorization");
          const token = header? header.toString() : '';


          localStorage.setItem("token" , token);
          localStorage.setItem("id" , result.toString());
          console.log("token",token);
          this.userIdService.currentUser = this.adminDetail;
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
