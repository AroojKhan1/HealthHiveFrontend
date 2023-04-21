export class Reply{
  id:number;
  content:string;

  reply_date:Date;
  time:Date;
  user_id:number;
  post_id:number;



  constructor(
    id:number,
  content:string,
  reply_date:Date,
  time:Date,
  user_id:number,
    post_id:number,
  ){}

}
