import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class SharedDataService {
  constructor() {}

  isUserLoggedIn = new BehaviorSubject(false);
  private loggedInUser = {};

  // set isUserLogIn(value: boolean) {
  //   this.isUserLoggedIn = value;
  // }

  // get isUserLogIn() {
  //   return this.isUserLoggedIn;
  // }

  set loggedInUserData(obj) {
    this.loggedInUser = obj;
  }

  get loggedInUserData() {
    return this.loggedInUser;
  }
}
