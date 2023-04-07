import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AdminService} from "../admin.service";
import {User} from "../user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  private adminId:number;
  public haveData= 0;

   user:User[];

  public dataRequest = false;

  constructor(public adminService  : AdminService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    console.log("here in profile");
    if((this.adminService.isLoggedIn()) )
    {

      this.route.paramMap.subscribe(params => {
        this.adminId =+ params.get('adminId')!;
      });
    }
    else
    {
      console.log("not logged in");
      this.router.navigate(['/login']);
    }

  }

  getAdminData()
  {
    this.haveData = 0;

    this.dataRequest = true;

    this.adminService.getAdminDetail(this.adminId).subscribe(
      response => {

        let result = response.json();
        this.user = result;

        if(result == " ")
        {
          this.haveData = 0;
        }
        else
        {
          this.haveData = this.haveData + 1;
        }
      },
      error => {
        console.log("error while getting Admin Data");
      }
    );
  }
}
