import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserIdService {
  constructor(private http:HttpClient) { }

  private _userId: string;
  private _currentUser: any;

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get currentUser(): any {
    return this._currentUser;
  }




  set currentUser(user: any) {
    this._currentUser = user;
  }
}
