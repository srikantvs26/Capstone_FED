import { Component, OnInit } from '@angular/core';
import { Main } from 'src/app/main.service';
import { ApprovalReq } from 'src/app/ApprovalReq';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendingjoinings',
  templateUrl: './pendingjoinings.component.html',
  styleUrls: ['./pendingjoinings.component.css']
})
export class PendingjoiningsComponent implements OnInit {
  users:ApprovalReq[];
  constructor(private main:Main,private router:Router) { }

  ngOnInit() {
    this.main.getRequests().subscribe(resp=>{
      this.users=resp;
    })
  }
  approve(Approve:ApprovalReq){
    this.main.approved(Approve).subscribe(resp=>{
      this.ngOnInit();
    })
  }
  reject(Reject:ApprovalReq){
    this.main.rejected(Reject).subscribe(resp=>{
      this.ngOnInit();
    })
  }
}
