import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AdminModule } from './admin/admin.module';

import { SignupComponent } from './signup/signup.component';

import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserModule } from './user/user.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
 
    SignupComponent
 
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,FormsModule,HttpClientModule,AdminModule,UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
