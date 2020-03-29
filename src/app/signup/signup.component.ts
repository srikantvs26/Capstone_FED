import { Component, OnInit } from '@angular/core';
import { Main } from '../main.service';

import { Router } from '@angular/router';
import { NewUser } from '../NewUser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private main: Main, private router: Router) { }
  submit(nU: NewUser): void {
    if (nU.age <= 100 && nU.age > 0) {
      this.main.newUser(nU).subscribe(resp => {
        if (resp) {
          alert("Registration is successfull");
          this.router.navigate(['/'])
        }
      })
    }
    else { alert("Age should be between 1 to 100"); }
  }

  ngOnInit() {
  }

}
