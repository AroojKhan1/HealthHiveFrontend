import { Component } from '@angular/core';
import {CalorieService} from "../../calorie.service";
import {WorkoutService} from "../../workout.service";
import {Calorie} from "../../Calorie";
import {Workout} from "../../Workout";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  constructor(private service:WorkoutService) {
  }

  workout =new Workout(0,0,new Date(),"",0,"");
  wkt:any;
  message:any;
  ngOnInit():void{
    let resp = this.service.getWorkouts();
    resp.subscribe((data)=>this.wkt=data)
  }

  public addWorkout(){
    let resp=this.service.addWorkout(this.workout);
    resp.subscribe((data)=>{this.message=data});
  }
  public getWorkoutByDate(){
    console.log(this.workout.w_date.toLocaleString(""));
    let resp = this.service.getWorkoutByDate(this.workout.w_date.toLocaleString(""));
    resp.subscribe((data)=>this.wkt=data)
  }
}
