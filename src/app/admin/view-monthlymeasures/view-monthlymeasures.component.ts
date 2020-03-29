import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-monthlymeasures',
  templateUrl: './view-monthlymeasures.component.html',
  styleUrls: ['./view-monthlymeasures.component.css']
})
export class ViewMonthlymeasuresComponent implements OnInit {
  button26:string;
  button24:string;
  constructor() { }

  ngOnInit() {
    this.button24="null";
    this.button26="null";
  }
activeA(){
  this.button26="above";
  this.button24="null";
}
activeB(){
  this.button24="below";
  this.button26="null";
}
onDistroy(){

}
}
