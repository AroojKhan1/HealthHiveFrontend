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

  ngOnInit():void{
    let resp = this.service.getCalorie();
    resp.subscribe((data)=>this.clr=data)
  }
  public addMeal(){
    let resp=this.service.addMeal(this.calorie);
    resp.subscribe((data)=>{this.message=data});
  }

  public getCalOnDate(){
    console.log(this.calorie.meal_date.toLocaleString(""));

    let resp = this.service.getCalorieOnDay(this.calorie.meal_date.toLocaleString(""));
    resp.subscribe((data)=>this.clr=data)
  }

}
