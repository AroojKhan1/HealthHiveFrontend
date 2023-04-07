import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../user";
import {AdminService} from "../admin.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']


})
export class SignupComponent implements OnInit {

  adminDetail:User = new User(0,"","","","",0,"","","");

  constructor(private adminService : AdminService, private router : Router) { }
  message:any;
  ngOnInit() {
  }

  // create the form object.
  form = new FormGroup({
    user_name : new FormControl('' , Validators.required),
    email : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required),
    confirmPassword : new FormControl('' , Validators.required),
    role : new FormControl('' , Validators.required),
    age : new FormControl('' , Validators.required),
    gender : new FormControl(''),
    first_name : new FormControl(''),
    last_name : new FormControl(''),


  });

  AdminForm(AdminInformation:any)
  {
    let pass = this.Password?.value?? '';
    let confirmPass = this.ConfirmPassword?.value?? '';

    if(pass == confirmPass)
    {
      this.adminDetail.user_name = this.user_name?.value ?? '';
      this.adminDetail.email = this.Email?.value ?? '';
      this.adminDetail.password = this.Password?.value?? '';
      this.adminDetail.age = parseInt(this.age?.value?? '');
      this.adminDetail.role = this.Role?.value?? '';
      // this.adminDetail.role = this.Role?.value?? '';
      // this.adminDetail.role = this.Role?.value?? '';


      this.adminService.saveAdminDetails(this.adminDetail).subscribe(
        response => {
          let result = response.json();

          if(result > 0)
          {
            this.router.navigate(['/login']);
          }
          else
          {
            alert("error occur while registring User. please try after sometime.")
          }
        },
        error => {
          alert("error occur while registring User. please try after sometime.")
        }
      );

    }
    else
    {
      alert("Password and confirm password not match.");
    }
  }

  get user_name(){
    return this.form.get('user_name');
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  get ConfirmPassword(){
    return this.form.get('confirmPassword');
  }

  get Role(){
    return this.form.get('role');
  }

  get age(){
    return this.form.get('age');
  }


}
