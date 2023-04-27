import { Component } from '@angular/core';
import {ChatService} from "../chat.service";
import {User} from "../user";
import {Chats} from "../Chats";

@Component({
  selector: 'app-ask-dr',
  templateUrl: './ask-dr.component.html',

  styleUrls: ['./ask-dr.component.css']
})
export class AskDrComponent {
  constructor(private service:ChatService) {
  }
  user = new User(0,"","","","",0,"","","");
  userId:number;

  chat=new Chats("");
  ngOnInit():void{
    const id = localStorage.getItem('id');
    this.userId=id? +id:0;
    console.log("user id in askDr",this.userId);
    // this.service.getUsername(this.userId).subscribe(data =>{
    //   this.chat=data;
    //
    //   console.log("user name in askDr",this.chat.userName);
    // })

    const chatFrame = document.getElementById("chat-frame") as HTMLIFrameElement;

    this.service.getUsername(this.userId).subscribe(data => {
      const username = data.userName;
      const chatSrc = chatFrame.src;
      chatFrame.src = chatSrc.replace(/username=bob/, `username=${username}`);
    });


  }

}
