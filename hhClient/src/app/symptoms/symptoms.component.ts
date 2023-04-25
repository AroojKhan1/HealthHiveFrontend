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

  constructor(private service:SymptomService) { }

  symptom = new SymptomJournal(0,new Date(),new Date(),"",0);
  symptoms:any;
  message:any;
  userId:number;

  ngOnInit(): void {

    const id = localStorage.getItem('id');
    this.userId = id? +id : 0;
    console.log("user id sj:",this.userId);
    let resp = this.service.getSymp(this.userId);
    resp.subscribe((data)=>this.symptoms=data)

    // const id = localStorage.getItem('id');
    // this.userId = id? +id : 0;
    // console.log("user id sj:",this.userId);
    // let resp = this.service.getSymp(this.userId);
    console.log("sympltoms:",this.symptoms)
    // resp.subscribe((data)=>this.symptoms=data)
  }

  public addNow(){

    const id = localStorage.getItem('id');
    this.symptom.user = id? +id : 0;
    let resp=this.service.addSymptom(this.symptom);
    resp.subscribe((data)=>this.message=data);
  }


  public getSympOnDate(){
    console.log(this.symptom.symptom_date.toLocaleString(""));
    const id = localStorage.getItem('id');
    this.userId = id? +id : 0;
    console.log("user id wktbydt:",this.userId);
    console.log(this.symptom.symptom_date.toLocaleString(""));

    let resp = this.service.getSymptomOnDay(this.symptom.symptom_date.toLocaleString(""),this.userId);
    resp.subscribe((data)=>this.symptoms=data)
  }

}
