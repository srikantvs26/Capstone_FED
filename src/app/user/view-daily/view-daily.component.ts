import { Component, OnInit } from '@angular/core';
import { Main } from 'src/app/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-daily',
  templateUrl: './view-daily.component.html',
  styleUrls: ['./view-daily.component.css']
})
export class ViewDailyComponent implements OnInit {

show:boolean;
files: Observable<string[]>;
  constructor(private main:Main) { }

  ngOnInit() {
  this.main.getDiv().subscribe(resp=>{
    if(resp>25){
      this.files = this.main.getAboveDailyFiles();
      if(this.files==null){
      alert("No uploads!");
      this.show=false;
      }
      else
      this.show=true;
    }
    else{
      this.files = this.main.getBelowDailyFiles();
      this.show=true;
    }
  })
  }
  

}
