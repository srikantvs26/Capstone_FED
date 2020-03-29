import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Main } from 'src/app/main.service';

@Component({
  selector: 'app-uploadhistory',
  templateUrl: './uploadhistory.component.html',
  styleUrls: ['./uploadhistory.component.css']
})
export class UploadhistoryComponent implements OnInit {

  files: Observable<string[]>;
  constructor(private route:ActivatedRoute,private main:Main) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('email'); 
    this.files = this.main.uploadHistory(id);
  }

}
