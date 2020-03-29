import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Main } from 'src/app/main.service';

@Component({
  selector: 'app-below25-monthly',
  templateUrl: './below25-monthly.component.html',
  styleUrls: ['./below25-monthly.component.css']
})
export class Below25MonthlyComponent implements OnInit {
  files: Observable<string[]>;
  constructor(private main:Main) { }

  ngOnInit() {
    this.files = this.main.getBelowMonthlyFiles();
  }

}
