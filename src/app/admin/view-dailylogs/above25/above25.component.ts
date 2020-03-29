import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Main } from 'src/app/main.service';

@Component({
  selector: 'app-above25',
  templateUrl: './above25.component.html',
  styleUrls: ['./above25.component.css']
})
export class Above25Component implements OnInit {
  files: Observable<string[]>;
  show:boolean;
  constructor(private main:Main) { }

  ngOnInit() {
    this.files = this.main.getAboveDailyFiles();
    if(this.files==null){
    alert("No uploads!");
    this.show=false;
    }
    else
    this.show=true;
  }

}
