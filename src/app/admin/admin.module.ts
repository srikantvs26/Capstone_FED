import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';


import { DietzonesComponent } from './dietzones/dietzones.component';
import { PendingjoiningsComponent } from './pendingjoinings/pendingjoinings.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Abovebmi25Component } from './dietzones/abovebmi25/abovebmi25.component';
import { Belowbmi25Component } from './dietzones/belowbmi25/belowbmi25.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatTimelineComponent } from './chats/chat-timeline/chat-timeline.component';
import { UniquePipe } from './unique.pipe';
import { HomeComponent } from './home/home.component';
import { ViewDailylogsComponent } from './view-dailylogs/view-dailylogs.component';
import { ViewMonthlymeasuresComponent } from './view-monthlymeasures/view-monthlymeasures.component';
import { Above25Component } from './view-dailylogs/above25/above25.component';
import { Below25Component } from './view-dailylogs/below25/below25.component';
import { Below25MonthlyComponent } from './view-monthlymeasures/below25-monthly/below25-monthly.component';
import { Above25MonthlyComponent } from './view-monthlymeasures/above25-monthly/above25-monthly.component';
import { UploadHistoryComponent } from './upload-history/upload-history.component';
import { SearchByEmailPipe } from './search-by-email.pipe';





@NgModule({
  declarations: [AdminHomeComponent, DietzonesComponent, Abovebmi25Component, Belowbmi25Component, PendingjoiningsComponent, UsersComponent, Belowbmi25Component, UserdetailsComponent, ChatsComponent, ChatTimelineComponent, UniquePipe, HomeComponent, ViewDailylogsComponent, ViewMonthlymeasuresComponent, Above25Component, Below25Component, Below25MonthlyComponent, Above25MonthlyComponent, UploadHistoryComponent, SearchByEmailPipe],
  imports: [
    CommonModule, FormsModule, RouterModule.forRoot([
      {
        path: 'adminHome', component: AdminHomeComponent,
        children: [
          { path: '', component: HomeComponent },

          {
            path: 'dietZones', component: DietzonesComponent,
            children: [
              { path: 'abovebmi25', component: Abovebmi25Component },
              { path: 'belowbmi25', component: Belowbmi25Component }
            ]
          },
          { path: 'pendingJoinings', component: PendingjoiningsComponent },
          { path: 'allusers', component: UsersComponent },
          { path: 'userdetails/:email', component: UserdetailsComponent },
          { path: 'allusers/userdetails/:email', component: UserdetailsComponent },
          { path: 'pendingJoinings/userdetails/:email', component: UserdetailsComponent },
          {
            path: 'chats', component: ChatsComponent,
            children: [
              { path: 'chattimeline/:to/:from', component: ChatTimelineComponent }
            ]
          },
          {
            path: 'viewdaily', component: ViewDailylogsComponent,
            children: [
              { path: 'above25', component: Above25Component },
              { path: 'below25', component: Below25Component }
            ]
          },
          {
            path: 'viewmonthly', component: ViewMonthlymeasuresComponent,
            children: [
              { path: 'above25monthly', component: Above25MonthlyComponent },
              { path: 'below25monthly', component: Below25MonthlyComponent }
            ]
          },
          { path: 'viewdaily/above25/uploadhistory/:email', component: UploadHistoryComponent },
          { path: 'viewdaily/below25/uploadhistory/:email', component: UploadHistoryComponent }
        ]
      }
    ])
  ]
})
export class AdminModule { }
