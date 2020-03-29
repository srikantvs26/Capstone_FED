import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DietzoneComponent } from './dietzone/dietzone.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatTimelineComponent } from './chats/chat-timeline/chat-timeline.component';
import { UniquePipe} from './unique.pipe';
import { SearchByMailPipe } from './search-by-email.pipe';
import { DailyLogsComponent } from './daily-logs/daily-logs.component';
import { MonthlyMeasurementsComponent } from './monthly-measurements/monthly-measurements.component';
import { ViewDailyComponent } from './view-daily/view-daily.component';
import { ViewMonthlyComponent } from './view-monthly/view-monthly.component';
import { UploadhistoryComponent } from './uploadhistory/uploadhistory.component';

const routes: Routes = [
  {path:'userHome',component:UserHomeComponent,
        children:[
          {path:'',component:HomeComponent},
          {path:'dietZone',component:DietzoneComponent},
          {path:'chats',component:ChatsComponent,
             children:[
                {path:'chattimeline/:to/:from', component:ChatTimelineComponent}
              ]
          },
          {path:'home',component:HomeComponent},
          {path:'updatedaily',component:DailyLogsComponent},
          {path:'updatemonthly',component:MonthlyMeasurementsComponent},
          {path:'viewdaily',component:ViewDailyComponent},
          {path:'viewmonthly',component: ViewMonthlyComponent },
          {path:'viewdaily/uploadhistory/:email', component:UploadhistoryComponent}
        ]
}

];

@NgModule({
  declarations: [UserHomeComponent, HomeComponent, DietzoneComponent, ChatsComponent, ChatTimelineComponent, UniquePipe,SearchByMailPipe, DailyLogsComponent, MonthlyMeasurementsComponent, ViewDailyComponent, ViewMonthlyComponent, UploadhistoryComponent ],
  imports: [
    CommonModule,FormsModule,RouterModule.forRoot(routes)
  ]
})
export class UserModule { }
