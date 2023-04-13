import { Component } from '@angular/core';
import {WaterService} from "../../water.service";
import {Water} from "../../Water";

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent {
  constructor(private service:WaterService) {
  }
  water = new Water(0,0,0,new Date(), new Date())
  wtr:any;
  message:any;
  userId:number;
  ngOnInit():void{
    const id = localStorage.getItem('id');
    this.userId = id? +id : 0;
    console.log("user id wtr:",this.userId);
    let resp = this.service.getWaterData(this.userId);
    resp.subscribe((data)=>this.wtr=data)
  }

  public addWater(){
    const id = localStorage.getItem('id');
    this.water.user = id? +id : 0;
    let resp=this.service.addWater(this.water);
    resp.subscribe((data)=>{this.message=data});
  }

}
