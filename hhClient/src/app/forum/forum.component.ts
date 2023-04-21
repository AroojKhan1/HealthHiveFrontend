import {Component, OnInit} from '@angular/core';
import {SymptomService} from "../symptom.service";
import {ForumService} from "../forum.service";
import {Post} from "../Post";
import {Reply} from "../Reply";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  // template: '<p>This is the todo component.</p>',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private service:ForumService) { }
  post = new Post(0,"",new Date(),"",0,0,new Date());
  reply = new Reply(0,"",new Date(),new Date(),0);

  message:any;
  userId:number;
  posts:any;
  replies:any;

  ngOnInit(): void {

    let resp = this.service.getAllPosts();
    resp.subscribe((data)=>this.posts=data)

  }


  public addNowPost(){

    const id = localStorage.getItem('id');
    this.post.user_id = id? +id : 0;
    let resp=this.service.addPost(this.post,this.userId);
    resp.subscribe((data)=>this.message=data);
  }


  public addNowReply(){

    const id = localStorage.getItem('id');
    this.reply.user_id = id? +id : 0;
    let resp=this.service.addReplyToPost(this.post.id,this.userId,this.reply);
    resp.subscribe((data)=>this.message=data);
  }

}
