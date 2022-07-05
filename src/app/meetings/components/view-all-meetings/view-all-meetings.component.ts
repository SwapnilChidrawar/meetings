import { Component, OnInit } from '@angular/core';
import { GetMeetingService } from '../../services/getMeetings.service';

@Component({
  selector: 'app-view-all-meetings',
  templateUrl: './view-all-meetings.component.html',
  styleUrls: ['./view-all-meetings.component.scss']
})
export class ViewAllMeetingsComponent implements OnInit {
  meetingsData;
  constructor(private getMeetings: GetMeetingService) { }

  ngOnInit(): void {
    this.fetchMeetings();
  }

  fetchMeetings() {
    this.getMeetings.getMeetings().subscribe((result) => {
      if(result.isVerifiedUser) {
        this.meetingsData = result?.data;
        console.log(this.meetingsData);
      }
    })
  }

}
