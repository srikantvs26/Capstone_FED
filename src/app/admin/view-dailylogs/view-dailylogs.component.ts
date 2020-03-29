import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-dailylogs',
  templateUrl: './view-dailylogs.component.html',
  styleUrls: ['./view-dailylogs.component.css']
})
export class ViewDailylogsComponent implements OnInit {
  button26: string;
  button24: string;
  constructor() { }

  ngOnInit() {
    this.button24 = "null";
    this.button26 = "null";
  }
  activeA() {
    this.button26 = "above";
    this.button24 = "null";
  }
  activeB() {
    this.button24 = "below";
    this.button26 = "null";
  }
  onDistroy() {

  }
}
