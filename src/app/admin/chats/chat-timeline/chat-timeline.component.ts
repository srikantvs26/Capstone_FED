import { Component, OnInit } from '@angular/core';
import { Chats } from 'src/app/Chats';
import { ActivatedRoute } from '@angular/router';
import { Main } from 'src/app/main.service';

@Component({
  selector: 'app-chat-timeline',
  templateUrl: './chat-timeline.component.html',
  styleUrls: ['./chat-timeline.component.css']
})
export class ChatTimelineComponent implements OnInit {

  chat:Chats[];
  CurrentTime: string;
  h: Chats;
  msg:string;
  emailId:string;
    constructor(private route:ActivatedRoute,private main:Main) { 
      this.route.paramMap.subscribe(params => {
        this.ngOnInit();
       });
       this.h=new Chats;
       this.msg=null;
       
    }
  
    ngOnInit() {
      const from = this.route.snapshot.paramMap.get('from');
      const to = this.route.snapshot.paramMap.get('to');
      this.msg=null;
      this.emailId=to;
      this.main.chatTimeline(from,to).subscribe(resp=>{
        this.chat=resp;
      });
    }
    send():void{
      if(this.msg!=null){
      this.CurrentTime = new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getUTCFullYear()+'  '+new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
      this.h.f=" ";
      this.h.fmail=this.route.snapshot.paramMap.get('to');
      this.h.t=" ";
      this.h.tmail=this.route.snapshot.paramMap.get('from');
      this.h.msg=this.msg;
      this.h.time=this.CurrentTime;
      this.h.status="nRead";
      this.main.savechat(this.h).subscribe(resp=>{
        if(resp)
        {this.ngOnInit();}
      })
    }
    else{alert("Please type any message");}
    }
  
}
