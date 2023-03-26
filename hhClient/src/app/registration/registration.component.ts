import { Component, OnInit } from '@angular/core';

import {UserRegistrationService} from "../user-registration.service";
import {User} from "../user";
import {Observable} from "rxjs";


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

  canRegister:boolean =false;


  toggleIsRegistered() {
    this.isRegistered = !this.isRegistered;
  }
  constructor(private service:UserRegistrationService) { }

  ngOnInit() {
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
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
  }



}



