import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
activated:number;
  constructor(private r:Router) { }
  btnpending():void{
    this.r.navigate(['/pendingJoinings']);
  }
  ngOnInit() {
  }
  logout(){
    this.r.navigate(["/"]);
  }
  active(i:number){
this.activated=i;
  }
}
