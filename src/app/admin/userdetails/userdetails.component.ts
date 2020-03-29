import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/NewUser';
import { ActivatedRoute } from '@angular/router';
import { Main } from 'src/app/main.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user:NewUser;
  constructor(private route:ActivatedRoute,private main:Main) { }

  ngOnInit() {
   const id = this.route.snapshot.paramMap.get('email'); 
  this.main.details(id).subscribe(resp=>{
  this.user=resp;
   });
  }

 
}
