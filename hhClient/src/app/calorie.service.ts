import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Water} from "./Water";
import {Observable} from "rxjs";
import {Calorie} from "./Calorie";

@Injectable({
  providedIn: 'root'
})
export class CalorieService {

  constructor(private http:HttpClient) { }

  public addMeal(calorie:Calorie){
    return this.http.post("http://localhost:8080/calorie",
      calorie,{responseType:'text' as 'json'})

  }
  public getCalorie(userId:number):Observable<Calorie[]>{
    return this.http.get<Calorie[]>(`http://localhost:8080/getAllcalorie/${userId}`);
  }

  public getCalorieOnDay(meal_date:String,userId:number):Observable<Calorie[]>{

    console.log("meal date: ",meal_date)

    return this.http.get<Calorie[]>(`http://localhost:8080/calorie/${userId}?date=${meal_date}`);
  }
}
