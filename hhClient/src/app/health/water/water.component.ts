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
  ngOnInit():void{

    let resp = this.service.getWaterData();
    resp.subscribe((data)=>this.wtr=data)
  }

  public addWater(){
    let resp=this.service.addWater(this.water);
    resp.subscribe((data)=>{this.message=data});
  }

}
