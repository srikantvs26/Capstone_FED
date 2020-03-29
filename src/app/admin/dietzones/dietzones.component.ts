import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dietzones',
  templateUrl: './dietzones.component.html',
  styleUrls: ['./dietzones.component.css']
})
export class DietzonesComponent implements OnInit {
button26:string;
button24:string;
  constructor() {
    this.button24="null";
    this.button26="null";
   }

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
