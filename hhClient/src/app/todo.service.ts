import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDo} from "./ToDo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  public getTodo(userId:number):Observable<ToDo[]>{
    return this.http.get<ToDo[]>(`http://localhost:8080/yourTodos/${userId}`);
  }

  public addTodo(todo:ToDo){
    return this.http.post("http://localhost:8080/addTodo",todo,{responseType:'text' as 'json'})
  }

//not working to be fixed
  updateTodoStatus(task: ToDo) {
    console.log('updateTodoStatus called');
    return this.http.put(`http://localhost:8080/yourTodos/${task.id}`, task, { responseType: 'text' });
  }
}

