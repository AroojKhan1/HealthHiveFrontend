import {Component, OnInit} from '@angular/core';
import {ToDo} from "../ToDo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  // template: '<p>This is the todo component.</p>',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  newTask:ToDo = new ToDo(0,false,"",0)

  todos:any;
  tasks:ToDo[];


  constructor(private service:TodoService) {
  }

  ngOnInit() {
    // this.service.getTodo().subscribe(data =>{
    //   this.tasks = data as ToDo;
    // });
    let resp = this.service.getTodo();
    resp.subscribe((data)=>this.todos=data)

  }

  addTask(item:string){
    this.newTask.completed=false;

    this.service.addTodo(this.newTask).subscribe(task=>{
      this.tasks.push(task as ToDo);
      this.newTask=new ToDo(0,false,"",0);
    })

}
  toggleTask(task:ToDo){
    task.completed = !task.completed;
    // this.service.updateTodoStatus(task).subscribe();
  }


}
