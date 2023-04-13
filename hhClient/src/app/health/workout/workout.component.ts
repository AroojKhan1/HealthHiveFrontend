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

//search feature needs fixing doesnt display data
export class WorkoutComponent {
  constructor(private service:WorkoutService) {
  }

  workout =new Workout(0,0,new Date(),"",0,"");
  wkt:any;
  message:any;
  userId:number;
  ngOnInit():void{
    const id = localStorage.getItem('id');
    this.userId = id? +id : 0;
    console.log("user id wkt:",this.userId);
    let resp = this.service.getWorkouts(this.userId);
    resp.subscribe((data)=>this.wkt=data)
  }

  public addWorkout(){
    const id = localStorage.getItem('id');
    this.workout.user = id? +id : 0;
    let resp=this.service.addWorkout(this.workout);
    resp.subscribe((data)=>{this.message=data});
  }
  public getWorkoutByDate(){
    const id = localStorage.getItem('id');
    this.userId = id? +id : 0;
    console.log("user id wktbydt:",this.userId);
    console.log(this.workout.w_date.toLocaleString(""));

    let resp = this.service.getWorkoutByDate(this.workout.w_date.toLocaleString(""),this.userId);
    console.log("data:", this.wkt)
    resp.subscribe((data)=>this.wkt=data)
  }
}
