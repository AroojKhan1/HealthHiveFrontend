import { Component } from '@angular/core';
import {CalorieService} from "../../calorie.service";
import {Calorie} from "../../Calorie";

@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.css']
})
export class CalorieComponent {
  constructor(private service:CalorieService) {
  }
  calorie =new Calorie(0,"",0,new Date(),0);
  clr:any;
  message:any;
  userId:number;
  ngOnInit():void{
    const id = localStorage.getItem('id');
    this.userId = id? +id : 0;
    console.log("user id wkt:",this.userId);
    let resp = this.service.getCalorie(this.userId);
    resp.subscribe((data)=>this.clr=data)
  }
  public addMeal(){
    const id = localStorage.getItem('id');
    this.calorie.user = id? +id : 0;
    let resp=this.service.addMeal(this.calorie);
    resp.subscribe((data)=>{this.message=data});
  }

  public getCalOnDate(){
    console.log(this.calorie.meal_date.toLocaleString(""));
    const id = localStorage.getItem('id');
    this.userId = id? +id : 0;
    console.log("user id wktbydt:",this.userId);
    console.log(this.calorie.meal_date.toLocaleString(""));

    let resp = this.service.getCalorieOnDay(this.calorie.meal_date.toLocaleString(""),this.userId);
    resp.subscribe((data)=>this.clr=data)
  }

}
