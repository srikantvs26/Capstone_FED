import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Main } from 'src/app/main.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  activated:number;
  access:boolean;
  constructor(private main:Main, private router:Router) { }

  ngOnInit() {
    this.main.getAccess().subscribe(resp=>{
      this.access=resp;
    })
  }
  logout(){
    this.router.navigate(["/"]);
  }
  active(i:number){
    this.activated=i;
  }
}
