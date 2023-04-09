import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Water} from "./Water";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WaterService {

  constructor(private http:HttpClient) { }

  public addWater(water:Water){
    return this.http.post("http://localhost:8080/water",
      water,{responseType:'text' as 'json'})

  }
  public getWaterData():Observable<Water[]>{
    return this.http.get<Water[]>(`http://localhost:8080/water`);
  }
}
