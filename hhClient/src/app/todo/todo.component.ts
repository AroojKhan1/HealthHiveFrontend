import {Component, OnInit} from '@angular/core';
import {ToDo} from "../ToDo";
import {TodoService} from "../todo.service";
import {UserIdService} from "../user-id.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',

  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  newTask:ToDo = new ToDo(0,false,"",0)
  message:any;
  todos:any;
  tasks:ToDo[];
  currentUser: any;

  userId: number;
  constructor(private service:TodoService,
              // private userIdService:UserIdService,
              private route:ActivatedRoute,
              private http: HttpClient,
              private router:Router) {
    // console.log('UserIdService:', this.userIdService);
  }

  ngOnInit() {


    const id = localStorage.getItem('id');
    this.userId = id? +id : 0;
    console.log("user id:",this.userId);
    let resp = this.service.getTodo(this.userId);
    resp.subscribe((data)=>this.todos=data)

  }

  addTask(item:string){
    this.newTask.completed=false;
    const id = localStorage.getItem('id');
    this.newTask.user = id? +id : 0;
    console.log("new task:",this.newTask);
    let resp=this.service.addTodo(this.newTask);
    resp.subscribe((data)=>this.message=data);



}

//works now but once set to true cant change it back :( try fixing that
  toggleTask(task:ToDo){
    console.log('toggleTask called');
    task.completed = true;
    this.service.updateTodoStatus(task).subscribe();
  }

  isTaskCompleted(todo: ToDo): boolean {
    return todo.completed;
  }


}
