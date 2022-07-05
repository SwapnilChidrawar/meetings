import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { SharedDataService } from "src/app/shared/services/shared-data.service";
import { AuthenticateService } from "../../services/authenticate.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authenticateService: AuthenticateService,
    private router: Router,
    private sharedDataService: SharedDataService
    ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit(data) {
    this.authenticateService
      .loginUser(this.loginForm.value)
      .subscribe((result) => {
        if (result.isVerifiedUser) {
          // navigate user
          this.sharedDataService.loggedInUserData = result.data;
          this.sharedDataService.isUserLoggedIn.next(true);
          this.router.navigate(['/meetings/view']);
        }
      });
  }
}
