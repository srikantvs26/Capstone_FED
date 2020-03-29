import { Component, OnInit } from '@angular/core';
import { Main } from 'src/app/main.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public emailId:User;
  constructor(private main:Main) { }

  ngOnInit() {
    this.main.getEmailId().subscribe(resp=>{
      this.emailId=resp;
    })
  }

}
