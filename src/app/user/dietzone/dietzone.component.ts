import { Component, OnInit } from '@angular/core';
import { Main } from 'src/app/main.service';
import { Msgs } from 'src/app/Msgs';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';


@Component({
  selector: 'app-dietzone',
  templateUrl: './dietzone.component.html',
  styleUrls: ['./dietzone.component.css']
})
export class DietzoneComponent implements OnInit {
  send:boolean;
  msgs:Msgs[];
  h: Msgs;
  div:number;
  msg:string;
  CurrentTime: string;

  selectedFiles: FileList;
  currentFileUpload: File;
  showFile = false;
  fileUploads: Observable<string[]>;
  public emailId:User;
    constructor(private main:Main) {
      this.h=new Msgs;
     }
    ngOnInit() {
      this.msg=null;
      this.main.getEmailId().subscribe(resp=>{
        this.emailId=resp;
      })
      this.main.getAccess().subscribe(resp=>{
        if(resp)
        this.send=true;
        else
        this.send=false;
      })
      this.main.getDiv().subscribe(resp=>{
        if(resp>25)
        {this.div=26;
          this.main.getAboveMsgs().subscribe(resp=>{
          if(resp)
          {this.msgs=resp;}
        })
        this.fileUploads = this.main.getAboveFiles();
        }
        else
        { this.div=24;  
          this.main.getBelowMsgs().subscribe(resp=>{
          if(resp)
          {this.msgs=resp;}
        }
        )
        this.fileUploads = this.main.getBelowFiles();
      }
      })
    }
    sent():void{
      if(this.msg!=null)
      {
      this.CurrentTime = new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getUTCFullYear()+'  '+new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
      this.h.fname=" ";
      this.h.msg=this.msg;
      this.h.time=this.CurrentTime;
      this.h.access="yes";
      if(this.div<25){
      this.main.savebelowmsg(this.h).subscribe(resp=>{
        if(resp)
        {this.ngOnInit();}
      })
      }
      else{
        this.main.savemsg(this.h).subscribe(resp=>{
          if(resp)
          {this.ngOnInit();}
        })
      }
    }
    else{alert("Please type any message");}
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

}
