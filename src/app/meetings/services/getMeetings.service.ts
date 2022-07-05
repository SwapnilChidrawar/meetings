import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/shared/services/api.service";
import { SharedDataService } from "src/app/shared/services/shared-data.service";
import { environment } from "src/environments/environment";
import { MeetingsAPIUrls } from "../Constants/meetings-apiUrls";

@Injectable({ providedIn: "root" })
export class GetMeetingService {
  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService
  ) {}

  getMeetings(): Observable<any> {
    let data: any = this.sharedDataService.loggedInUserData;
    let url =
      environment.apiUrl +
      MeetingsAPIUrls.getMeetings +
      "?emailId=" + data.emailId;
    return this.apiService.get(url);
  }
}
