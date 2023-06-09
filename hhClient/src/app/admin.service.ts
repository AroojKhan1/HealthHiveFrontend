import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {User} from "./user";
import {Router} from "@angular/router";

import { map } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});
const options = { headers };


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // // Base URL
  private  baseUrl = "http://localhost:8080/";


//chng this to http instead of client to fix any issue
  constructor(private http: HttpClient, private router : Router) { }

  saveAdminDetails(adminDetail : User) : Observable<any>
  {
    let url = this.baseUrl + "saveAdmin";
    return this.http.post(url,adminDetail);
    // return this.http.post("http://localhost:8080/saveAdmin",adminDetail,{responseType: "json"})


}

  login(adminDetail : User): Observable<HttpResponse<Object>>
  {
    let url = this.baseUrl + "login";
    return this.http.post(url, adminDetail, {observe: "response",
      responseType: "json"});
    // return this.http.post("http://localhost:8080/login",adminDetail,{responseType:'text' as 'json'})
  }
  // public findUserbyid(id:number){
  //   console.log("in find id frnt");
  //   return this.http.get(`http://localhost:8080/findUserbyid/${id}`);
  // }





  logout()
  {
    // Remove the token from the localStorage.
    localStorage.removeItem('token');

    this.router.navigate(['']);

  }

  /*
  * Check whether User is loggedIn or not.
  */

  isLoggedIn() {
    let jwtHelper = new JwtHelperService();

    // get the token from the localStorage as we have to work on this token.
    let token = localStorage.getItem('token');

    // check whether if token have something or it is null.
    // if (!token) {
    //   return false;
    // }

    // get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accepts a string value which is nothing but a token.

    if (token) {
      let expirationDate = jwtHelper.getTokenExpirationDate(token);

      // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.

      let isExpired = jwtHelper.isTokenExpired(token);

      return !isExpired;
    }return false;//if !token return false
  }

  getAdminDetail(adminId:number) : Observable<any>
  {
    let url = this.baseUrl + "getAdminData/" + adminId;

    // create an instance of Header object.
    let headers = new Headers();

    // get token from localStorage.
    let token = localStorage.getItem('token');

    // Append Authorization header.
    headers.append('Authorization' , 'Bearer ' + token);

    // create object of RequestOptions and include that in it.
    // let options = new RequestOptions( { headers : headers } );

    return this.http.get(url , options);
  }


}
