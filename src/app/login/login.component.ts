import { Component, OnInit } from '@angular/core';
import { Main } from '../main.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
pass:string;

constructor(private mainService: Main, private router:Router){
}
  ngOnInit() {
  }
  
  login():void{
      this.mainService.login(this.email,this.pass).subscribe( response => {
        if(response==2)
        {this.router.navigate(['/adminHome']);}
        else if(response==1){
          this.router.navigate(['/userHome']);
        }
        else if(response==-1){
          alert("User Doesnot Exist!");
          this.email="";
          this.pass="";
        }
        else{
          alert("Invalid credentials please try again!");
          this.email="";
          this.pass="";
        }
      });
  }


}
