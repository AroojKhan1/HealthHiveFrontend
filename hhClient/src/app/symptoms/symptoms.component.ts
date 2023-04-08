import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {AdminService} from "../admin.service";
import {Router} from "@angular/router";
import {UserIdService} from "../user-id.service";
import {SymptomService} from "../symptom.service";
import {SymptomJournal} from "../SymptomJournal";

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  // template: '<p>This is the symptom component.</p>',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit{

  private adminDetail = new User(0,"","","","",0,"","","");

  constructor(private service:SymptomService,private adminService : AdminService, private router : Router, private userIdService:UserIdService) { }

  symptom = new SymptomJournal(0,new Date(),new Date(),"",0);
  symptoms:any;
  message:any;

  ngOnInit(): void {
    // if((this.adminService.isLoggedIn()) )
    // {
    //   this.router.navigate(['/addSymptom' , localStorage.getItem('id')]);
    // } else
    // {
    //   this.router.navigate(['/login']);
    // }
    let resp = this.service.getSymp();
    resp.subscribe((data)=>this.symptoms=data)
  }

  public addNow(){
    let resp=this.service.addSymptom(this.symptom);
    resp.subscribe((data)=>this.message=data);
  }


}
