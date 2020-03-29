import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Main } from 'src/app/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload-history',
  templateUrl: './upload-history.component.html',
  styleUrls: ['./upload-history.component.css']
})
export class UploadHistoryComponent implements OnInit {
  files: Observable<string[]>;
  constructor(private route:ActivatedRoute,private main:Main) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('email'); 
    this.files = this.main.uploadHistory(id);
  }
}
