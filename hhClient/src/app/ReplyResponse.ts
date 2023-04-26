import {Reply} from "./Reply";

export class ReplyResponse{
  reply:Reply;
  userName: string;


  constructor(reply: Reply, userName: string) {
    this.reply = reply;
    this.userName = userName;
  }
}
