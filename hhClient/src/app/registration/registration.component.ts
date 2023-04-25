import { Component, OnInit } from '@angular/core';

import {UserRegistrationService} from "../user-registration.service";
import {User} from "../user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: User=new User(0,"","","","",0,"","","");
  confirmPassword:string;
  message:any;

  isRegistered: boolean = false;
  registrationForm: FormGroup;

  canRegister:boolean =false;


  toggleIsRegistered() {
    this.isRegistered = !this.isRegistered;
  }
  constructor(private service:UserRegistrationService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

  }


  ngOnChanges(){
    if(this.user.user_name && this.user.email && this.user.age && this.user.password && this.user.role &&
      this.user.last_name && this.user.age) {
      this.canRegister = true;
    }
    else{
      this.canRegister=false;
    }
  }

  public registerNow(){

    if (this.user.password.length < 8 || this.user.password.length > 20) {
      alert("Password must be between 8 and 20 characters.");
      return;
    }



    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
  }


  public emailIsValid() {
    const email = document.getElementById("email") as HTMLInputElement;
    const emailValue = email.value;
    if (typeof emailValue === "string") {
      const re =new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      return re.test(emailValue);
    } else {
      return false;
    }
  }
}



