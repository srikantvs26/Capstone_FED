import { Component, OnInit } from '@angular/core';
import { Main } from 'src/app/main.service';

@Component({
  selector: 'app-monthly-measurements',
  templateUrl: './monthly-measurements.component.html',
  styleUrls: ['./monthly-measurements.component.css']
})
export class MonthlyMeasurementsComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  month:number;
  show:boolean;
  monthlyStatus:number[];
  constructor(private main:Main) { }

  ngOnInit() {
    this.main.getMonthlyStatus().subscribe(resp=>{
        this.monthlyStatus=resp
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
    this.main.uploadMonthlyFile(this.currentFileUpload,this.month).subscribe(event => {
      this.show=false;
    });
  }
    alert("File has been successfully uploaded");
    this.ngOnInit();
    this.selectedFiles = undefined;
  }
  enroll(m:number){
    this.main.enrollEligibility(m).subscribe(resp=>{
      if(resp){
        this.month=m;
        this.show=true;
      }
      else{
      alert("Please complete  "+m+" months of course.");
      }
    })
   
  }
}