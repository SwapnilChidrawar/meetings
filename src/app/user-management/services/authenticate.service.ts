import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/shared/services/api.service";
import { environment } from "src/environments/environment";
import { UserManagementAPIUrls } from "../constants/userManagement-apiUrls";
import { LoginUser, RegisterUser } from "../dataModals/registerDataModal";

@Injectable({ providedIn: "root" })
export class AuthenticateService {
  constructor(private apiService: ApiService) {}

  registerUser(reqData: RegisterUser): Observable<any> {
    let url = environment.apiUrl + UserManagementAPIUrls.registerUser;
    return this.apiService.post(url, reqData);
  }

  loginUser(reqData: LoginUser): Observable<any> {
    let url = environment.apiUrl + UserManagementAPIUrls.login;
    return this.apiService.post(url, reqData);
  }
}
