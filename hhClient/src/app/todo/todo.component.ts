import {Component, OnInit} from '@angular/core';
import {ToDo} from "../ToDo";
import {TodoService} from "../todo.service";
import {UserIdService} from "../user-id.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  // template: '<p>This is the todo component.</p>',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  newTask:ToDo = new ToDo(0,false,"",0)
  message:any;
  todos:any;
  tasks:ToDo[];
  currentUser: any;

  userId: string;
  constructor(private service:TodoService,
              // private userIdService:UserIdService,
              private route:ActivatedRoute,
              private http: HttpClient,
              private router:Router) {
    // console.log('UserIdService:', this.userIdService);
  }

  ngOnInit() {

    this.userId = this.route.snapshot.params['id'];
    console.log("user id: ",this.userId);
    let resp = this.service.getTodo(Number(this.userId));
    resp.subscribe((data)=>this.todos=data)

  }

  addTask(item:string){
    // this.newTask.completed=false;
    let resp=this.service.addTodo(this.newTask);
    resp.subscribe((data)=>this.message=data);



}

//not working to be fixed
  toggleTask(task:ToDo){
    console.log('toggleTask called');
    task.completed = !task.completed;
    this.service.updateTodoStatus(task).subscribe();
  }


}
