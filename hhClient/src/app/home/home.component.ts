import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
// import {AuthenticationService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
  }

}
