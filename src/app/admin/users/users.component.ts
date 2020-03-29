import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { Main } from 'src/app/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  constructor(private main:Main,private router:Router) { }
  email:string;
  type:string;
  a:string='all';
  search:string;
  ngOnInit() {
    this.main.getUsers().subscribe(resp=>{
      if(resp)
      this.users=resp;
    })

  }
  permission(email:string,type:string)
  {
  if(confirm("Are you sure to change type of the user?")){
    this.main.setType(email,type).subscribe(resp=>{
      if(resp)
      {this.ngOnInit();}
    })
  }
  }
  delete(email:string)
  {
    if(confirm("Are you sure you want to remove the user?")){
    this.main.deleteUser(email).subscribe(resp=>{
      if(resp)
      {this.ngOnInit();}
    })
  }
  }
above(){
  this.main.getUsersByDiv(26).subscribe(resp=>{
    if(resp)
    { this.users=resp;
      this.a='Above BMI25';
    }
  })
}
below(){
  this.main.getUsersByDiv(24).subscribe(resp=>{
    if(resp)
    { this.users=resp;
      this.a='Below BMI25';}
  })
}
allusers(){
  this.main.getUsers().subscribe(resp=>{
    if(resp){
    this.users=resp;
    this.a='All';
  }
  })
}
}

