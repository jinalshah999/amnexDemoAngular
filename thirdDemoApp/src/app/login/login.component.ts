import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  constructor(private _router: Router) {}

  ngOnInit() {
    this.buildForm();
  }
  onUserSubmit() {
    if (
      this.userForm.get("user_name").value == "admin" &&
      this.userForm.get("user_password").value == "1234"
    ) {
      localStorage.setItem("user_name", this.userForm.get("user_name").value);
      this._router.navigate(["/home"]);
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
