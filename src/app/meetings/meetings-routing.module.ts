import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleNewMeetingComponent } from './components/schedule-new-meeting/schedule-new-meeting.component';
import { ViewAllMeetingsComponent } from './components/view-all-meetings/view-all-meetings.component';


const routes: Routes = [
  {
    path: 'view',
    component: ViewAllMeetingsComponent
  },
  {
    path: 'schedule-new-meeting',
    component: ScheduleNewMeetingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }
