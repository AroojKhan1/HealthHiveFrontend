import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Calorie} from "./Calorie";
import {Workout} from "./Workout";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) {
  }

  public addWorkout(workout: Workout) {
    return this.http.post("http://localhost:8080/workout",
      workout, {responseType: 'text' as 'json'})
  }

  public getWorkouts():Observable<Workout[]>{
    return this.http.get<Workout[]>(`http://localhost:8080/getAllworkouts`);
  }

  public getWorkoutByDate(w_date:String):Observable<Workout[]>{

    console.log("w date: ",w_date)

    return this.http.get<Workout[]>(`http://localhost:8080/calorie?date=${w_date}`);
  }
}
