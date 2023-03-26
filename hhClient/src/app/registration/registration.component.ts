import { Component, OnInit } from '@angular/core';

import {UserRegistrationService} from "../user-registration.service";
import {User} from "../user";


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

  toggleIsRegistered() {
    this.isRegistered = !this.isRegistered;
  }
  constructor(private service:UserRegistrationService) { }

  ngOnInit() {
  }


  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
  }

}
