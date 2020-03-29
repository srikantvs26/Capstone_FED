import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Main } from 'src/app/main.service';

@Component({
  selector: 'app-above25-monthly',
  templateUrl: './above25-monthly.component.html',
  styleUrls: ['./above25-monthly.component.css']
})
export class Above25MonthlyComponent implements OnInit {
  files: Observable<string[]>;
  constructor(private main:Main) { }

  ngOnInit() {
    this.files = this.main.getAboveMonthlyFiles();
  }


}
