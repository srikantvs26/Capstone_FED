import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Main } from 'src/app/main.service';

@Component({
  selector: 'app-below25',
  templateUrl: './below25.component.html',
  styleUrls: ['./below25.component.css']
})
export class Below25Component implements OnInit {
  files: Observable<string[]>;
  no:boolean;
  constructor(private main:Main) { }

  ngOnInit() {
    this.files = this.main.getBelowDailyFiles();
    this.files.subscribe(resp=>{
      if(resp==null)
      this.no=true;
    })
    
   
  }

}
