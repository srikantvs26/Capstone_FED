import { Component, OnInit } from '@angular/core';
import { Main } from 'src/app/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-monthly',
  templateUrl: './view-monthly.component.html',
  styleUrls: ['./view-monthly.component.css']
})
export class ViewMonthlyComponent implements OnInit {
  files: Observable<string[]>;
  constructor(private main:Main) { }

  ngOnInit() {
    this.main.getDiv().subscribe(resp=>{
      if(resp>25){
        this.files = this.main.getAboveMonthlyFiles();
      }
      else{
        this.files = this.main.getBelowMonthlyFiles();
      }
    })
  }

}
