import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ToDo} from "./ToDo";
import {Calorie} from "./Calorie";


class SymptomJournal {
}

@Injectable({
  providedIn: 'root'
})
export class SymptomService {

  constructor(private http:HttpClient) { }

  public addSymptom(symptom:SymptomJournal){
    return this.http.post("http://localhost:8080/addSymptom",
      symptom,{responseType:'text' as 'json'})
  }

  public getSymp(userId:number):Observable<SymptomJournal[]>{
    return this.http.get<SymptomJournal[]>(`http://localhost:8080/symptoms/${userId}`);
  }

  public getSymptomOnDay(calorie_date:String,userId:number):Observable<SymptomJournal[]>{

    console.log("calorie date : ",calorie_date)

    return this.http.get<Calorie[]>(`http://localhost:8080/symptom/${userId}?date=${calorie_date}`);
  }
}
