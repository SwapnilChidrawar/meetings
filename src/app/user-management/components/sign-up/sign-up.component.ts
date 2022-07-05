import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthenticateService } from "../../services/authenticate.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  passwardRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  constructor(private authenticateService: AuthenticateService) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userName: new FormControl("", Validators.required),
      emailId: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(this.passwardRegex),
      ]),
      confirmPassword: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
    });
  }

  onSubmit(data) {
    if (
      this.signupForm.value.password.trim() !==
      this.signupForm.value.confirmPassword.trim()
    )
      return;
    console.log(this.signupForm.value);
    this.authenticateService
      .registerUser(this.signupForm.value)
      .subscribe((result) => {});
  }

  validateFields() {}
}
