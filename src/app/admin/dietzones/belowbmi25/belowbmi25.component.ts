import { Component, OnInit } from '@angular/core';
import { Msgs } from 'src/app/Msgs';
import { Main } from 'src/app/main.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';

@Component({
  selector: 'app-belowbmi25',
  templateUrl: './belowbmi25.component.html',
  styleUrls: ['./belowbmi25.component.css']
})
export class Belowbmi25Component implements OnInit {
  msgs:Msgs[];
  CurrentTime: string;
  h: Msgs;
  msg:string;
  
  selectedFiles: FileList;
  currentFileUpload: File;
  showFile = false;
  fileUploads: Observable<string[]>;

  public emailId:User;
  constructor(private main:Main) { 
    this.h=new Msgs;
    
  }
  ngOnInit() {
    this.main.getEmailId().subscribe(resp=>{
      this.emailId=resp;
    })
    this.main.getBelowMsgs().subscribe(resp=>{
      if(resp)
      {this.msgs=resp;
      this.msg=null;
      }
    }
    )

    this.fileUploads = this.main.getBelowFiles();
  }
  send():void{
    if(this.msg!=null){
    this.CurrentTime = new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getUTCFullYear()+'  '+new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
    this.h.fname=" ";
    this.h.msg=this.msg;
    this.h.time=this.CurrentTime;
    this.h.access="yes";
    this.main.savebelowmsg(this.h).subscribe(resp=>{
      if(resp)
      {this.ngOnInit();}
    })
  }
  else{alert("Please type any message");}
  }
  delete(msg:Msgs):void{
    if(confirm("Are you sure you want to delete it the msg?")){
    this.main.deleteBelowMsg(msg).subscribe(resp=>{
      if(resp)
      {this.ngOnInit();}
    })}
  }
  selectFile(event) {
    for (var i = 0; i < event.target.files.length; i++) {
      var name = event.target.files[i].name;
      var size = event.target.files[i].size;
      var sizeMB=Math.round(size / 1024);
    }
    if(sizeMB<500){this.selectedFiles = event.target.files;}
    else{alert("File size has been exceeded 500KB, Please upload a file with size < 500KB");
  this.ngOnInit();}
  }
 
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.main.uploadFile(this.currentFileUpload).subscribe(event => {
      this.ngOnInit();
    });
    this.selectedFiles = undefined;
  }

  deletefile(id:number){
    if(confirm("Are you sure, you want to delete this file ?")) {
    this.main.deleteFile(id).subscribe(resp=>{
        this.ngOnInit();
    });
  }
}
  

}
