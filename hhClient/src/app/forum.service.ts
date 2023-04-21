import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./Post";
import {Observable} from "rxjs";
import {Reply} from "./Reply";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http:HttpClient) { }

  public addPost(post:Post, userId:number){
    return this.http.post(`http://localhost:8080/forum/${userId}`,
      post,{responseType:'text' as 'json'})
  }


  public getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`http://localhost:8080/forum`);
  }

  public addReplyToPost(postId:number, userId:number, reply:Reply){
    return this.http.post(`http://localhost:8080/forum/${postId}/${userId}`,
      reply,{responseType:'text' as 'json'})
  }
}
