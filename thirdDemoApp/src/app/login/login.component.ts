import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { RegistrationService } from "../registration.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  constructor(private _router: Router, private _regData: RegistrationService) {}

  ngOnInit() {
    this.buildForm();
  }
  onUserSubmit() {
    if (
      this.userForm.get("user_name").value == "admin" &&
      this.userForm.get("user_password").value == "1234"
    ) {
      this._regData.LogIn(
        this.userForm.get("user_name").value,
        this.userForm.get("user_password").value
      );
      if (this._regData.redirectURL) {
        this._router.navigateByUrl(this._regData.redirectURL);
      } else {
        this._router.navigate(["/"]);
      }
    } else {
      alert("invalid uname or password");
    }
  }
  buildForm() {
    this.userForm = new FormGroup({
      user_name: new FormControl(null),
      user_password: new FormControl(null)
    });
  }
}
