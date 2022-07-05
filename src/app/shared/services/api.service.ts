import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get(url): Observable<any> {
    return this.httpClient.get(url);
  }

  post(url, reqData): Observable<any> {
    return this.httpClient.post(url, reqData);
  }
}
