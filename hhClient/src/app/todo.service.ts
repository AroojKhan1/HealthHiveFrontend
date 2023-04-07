import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDo} from "./ToDo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  public addTodo(todo:ToDo){
    return this.http.post("http://localhost:8080/addTodo",todo,{responseType:'text' as 'json'})
  }

  public getTodo(){
    return this.http.get("http://localhost:8080/yourTodos");
  }

  updateTodoStatus(task: ToDo) {
    return this.http.put(`http://localhost:8080/todos/${task.id}`, task, { responseType: 'text' });
  }
}

