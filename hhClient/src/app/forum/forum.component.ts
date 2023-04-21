import {Component, OnInit} from '@angular/core';
import {SymptomService} from "../symptom.service";
import {ForumService} from "../forum.service";
import {Post} from "../Post";
import {Reply} from "../Reply";
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  // template: '<p>This is the todo component.</p>',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private service:ForumService, private uService:AdminService) { }
  post = new Post(0,"",new Date(),"","",0,new Date());
  reply = new Reply(0,"",new Date(),new Date(),0,0);
  replyModel: number[] = [];


  message:any;
  userId:number;
  posts:any;
  replies:any;

  async ngOnInit() {

    let resp = this.service.getAllPosts();
    await resp.subscribe((data)=>this.posts=data);


    // this.replyModel = new Array(this.posts.length).fill('');


  }


  public addNowPost(){
    console.log("we r in component.ts");


    const id = localStorage.getItem('id');
    this.post.user_id = id? +id : 0;
    console.log("userId" ,this.post.user_id);

    let resp=this.service.addPost(this.post,this.post.user_id);
    resp.subscribe((data)=>this.message=data);
  }



  // public getusername(id:number){
  //   let resps=this.uService.findUserbyid(this.post.user_id);
  //   resps.subscribe((data)=>this.message=data);
  // }
  //
  public addNowReply(postId:number, replyModel:any){

    const id = localStorage.getItem('id');
    console.log('replyModel', replyModel);
    this.reply.content = replyModel;
    this.reply.user_id = id? +id : 0;
    console.log("userId" ,this.reply.user_id);
    console.log("postId" ,postId);
    let resp=this.service.addReplyToPost(postId,this.reply.user_id,this.reply);
    resp.subscribe((data)=>this.message=data);

  }

  // public addNowReply(postId: number, content: string) {
  //
  //   //   const id = localStorage.getItem('id');
  //   //   this.reply.user_id = id? +id : 0;
  //   //   console.log("userId" ,this.reply.user_id);
  //   //   console.log("postId" ,postId);
  //   //   let resp=this.service.addReplyToPost(postId,this.reply.user_id,this.reply);
  //   //   resp.subscribe((data)=>this.message=data);
  //   // }
  //   const id = localStorage.getItem('id');
  //   const reply: Reply = {
  //     user_id: id ? +id : 0,
  //     content: content,
  //     id: 0,
  //     reply_date: new Date(),
  //     time: new Date(),
  //     post_id: postId
  //   };
  //   console.log("userId", reply.user_id);
  //   console.log("postId", postId);
  //   let resp = this.service.addReplyToPost(postId, reply.user_id, reply);
  //   resp.subscribe((data) => this.message = data);
  //   this.reply = new Reply(0, "", new Date(), new Date(), 0, 0);
  //
  // }
  //


}
