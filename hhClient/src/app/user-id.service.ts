import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserIdService {

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
