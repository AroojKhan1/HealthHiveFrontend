import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chats} from "./Chats";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {
  }

  public getUsername(userId: number): Observable<Chats> {
    return this.http.get<Chats>(`http://localhost:8080/askDr/${userId}`);
  }
}
