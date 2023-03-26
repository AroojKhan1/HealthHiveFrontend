import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
// import {AuthenticationService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;

  // constructor(private route: ActivatedRoute,
  //             private router: Router,
  //             private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    // console.log('menu ->' + this.isLoggedIn);
  }
  //
  // handleLogout() {
  //   this.authenticationService.logout();
  // }
}
