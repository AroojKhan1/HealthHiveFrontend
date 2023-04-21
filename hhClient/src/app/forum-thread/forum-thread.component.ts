import { Component } from '@angular/core';
import {ForumService} from "../forum.service";
import {AdminService} from "../admin.service";
import {Post} from "../Post";
import {Reply} from "../Reply";

@Component({
  selector: 'app-forum-thread',
  templateUrl: './forum-thread.component.html',
  styleUrls: ['./forum-thread.component.css']
})
export class ForumThreadComponent {

  constructor(private service: ForumService, private uService: AdminService) {
  }

  post = new Post(0, "", new Date(), "", "", 0, new Date());
  reply = new Reply(0, "", new Date(), new Date(), 0, 0);

  message: any;
  userId: number;
  posts: any;
  replies: any;

  ngOnInit(): void {

    let resp = this.service.getAllPosts();
    resp.subscribe((data) => this.posts = data)

  }

  public addNowReply(postId: number, content: string) {

    //   const id = localStorage.getItem('id');
    //   this.reply.user_id = id? +id : 0;
    //   console.log("userId" ,this.reply.user_id);
    //   console.log("postId" ,postId);
    //   let resp=this.service.addReplyToPost(postId,this.reply.user_id,this.reply);
    //   resp.subscribe((data)=>this.message=data);
    // }
    const id = localStorage.getItem('id');
    const reply: Reply = {
      user_id: id ? +id : 0,
      content: content,
      id: 0,
      reply_date: new Date(),
      time: new Date(),
      post_id: postId
    };
    console.log("userId", reply.user_id);
    console.log("postId", postId);
    let resp = this.service.addReplyToPost(postId, reply.user_id, reply);
    resp.subscribe((data) => this.message = data);
    this.reply = new Reply(0, "", new Date(), new Date(), 0, 0);

  }
}
