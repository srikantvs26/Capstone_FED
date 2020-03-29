import { Component, OnInit } from '@angular/core';
import { Main } from 'src/app/main.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-daily-logs',
  templateUrl: './daily-logs.component.html',
  styleUrls: ['./daily-logs.component.css']
})
export class DailyLogsComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  uploaded:boolean;
  permission:boolean;
  uploadDate:number;
  constructor(private main:Main) { }

  ngOnInit() {
    this.main.getUploadPermission().subscribe(resp=>{
      if(resp)
      {this.permission=resp;}
      else
      {this.permission=resp;}
    })

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
    if(confirm("Are you sure, you want to Upload this file ?")) {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.main.uploadDailyFile(this.currentFileUpload).subscribe(event => {
      this.uploaded=true;
    });
    this.uploadDate=+(new Date().getDate());
    this.selectedFiles = undefined;
  }
}
}