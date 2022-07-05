import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { ViewAllMeetingsComponent } from './components/view-all-meetings/view-all-meetings.component';
import { SharedModule } from '../shared/shared.module';
import { ScheduleNewMeetingComponent } from './components/schedule-new-meeting/schedule-new-meeting.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewAllMeetingsComponent, ScheduleNewMeetingComponent],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MeetingsModule { }
