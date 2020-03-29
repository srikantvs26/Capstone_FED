import { Component, OnInit } from '@angular/core';
import { Main } from 'src/app/main.service';
import { Chats } from 'src/app/Chats';
import { User } from 'src/app/User';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  msgs:Chats[];
  users:User[];
  search:string;
  email:string;
  firstMsg:string;
  click:boolean;
  public isClicked = [];
  constructor(private main:Main) { }
  ngOnInit() {
    this.main.getIndividualMsgs().subscribe(resp=>{
      this.msgs=resp;
    })
    this.main.getAllUsers().subscribe(resp=>{
      this.users=resp;
    })
  }
  clicked(){
    if(!this.click){
    this.click=true;
    }
    else
    this.click=false;
  }
  send(){
    if(this.firstMsg!=null){
    this.main.newChat(this.email,this.firstMsg).subscribe(resp=>{
      if(resp){
        this.ngOnInit();
        this.click=false;
        this.firstMsg="";
        this.email="";
      }
    });
  }
  else{
    alert("Please type any message");
  }
  }
  activated(){
    this.isClicked = [];
  }
}
