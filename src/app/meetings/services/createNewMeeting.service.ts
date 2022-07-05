import { Injectable } from "@angular/core";
import { ApiService } from "src/app/shared/services/api.service";
import { environment } from "src/environments/environment";
import { MeetingsAPIUrls } from "../Constants/meetings-apiUrls";

@Injectable({ providedIn: "root" })
export class CreateNewMeeting {
  constructor(private apiService: ApiService) {}
  createNewMeeting(reqObj) {
    let url = environment.apiUrl + MeetingsAPIUrls.createMeeting;
    return this.apiService.post(url, reqObj);
  }
}
