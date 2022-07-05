import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { SharedDataService } from "src/app/shared/services/shared-data.service";
import { CreateNewMeeting } from "../../services/createNewMeeting.service";

@Component({
  selector: "app-schedule-new-meeting",
  templateUrl: "./schedule-new-meeting.component.html",
  styleUrls: ["./schedule-new-meeting.component.scss"],
})
export class ScheduleNewMeetingComponent implements OnInit {
  scheduleNewMeetingForm: FormGroup;
  constructor(
    private sharedDataService: SharedDataService,
    private createNewMeeting: CreateNewMeeting,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.scheduleNewMeetingForm = new FormGroup({
      meetingDate: new FormControl(),
      meetingTime: new FormControl(),
      meetingDesc: new FormControl(),
      meetingParticipant: new FormControl(),
    });
  }

  getAllParticipants(participants) {
    let participantArray = participants.split(",");
    return participantArray;
  }

  onSubmit(data) {
    let userData: any = this.sharedDataService.loggedInUserData;
    let obj = {
      organizer: userData.emailId,
      meetings: [
        {
          date: this.scheduleNewMeetingForm.value.meetingDate,
          time: this.scheduleNewMeetingForm.value.meetingTime,
          desc: this.scheduleNewMeetingForm.value.meetingDesc,
          participant: this.getAllParticipants(
            this.scheduleNewMeetingForm.value.meetingParticipant
          ),
        },
      ],
    };
    this.createNewMeeting.createNewMeeting(obj).subscribe((result) => {
      this.router.navigate(['/meetings/view']);
    })
  }
}
