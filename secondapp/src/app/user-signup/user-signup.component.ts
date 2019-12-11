import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-user-signup",
  templateUrl: "./user-signup.component.html",
  styleUrls: ["./user-signup.component.css"]
})
export class UserSignupComponent implements OnInit {
  user_signup: FormGroup;
  constructor() {}
  invalidNames: string[] = ["jinal", "shah"];
  ngOnInit() {
    this.user_signup = new FormGroup({
      user_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("[a-zA-z]*")
      ]),
      password_group: new FormGroup(
        {
          user_password: new FormControl(null, Validators.required),
          user_confirm_password: new FormControl(null)
        },
        this.matchPassword.bind(this)
      )
    });
  }
  onUserAdd() {
    console.log(this.user_signup);
  }

  invalidName(c: AbstractControl): { [key: string]: boolean } {
    if (this.invalidNames.indexOf(c.value) >= 0) {
      return { customError: true };
    }
    return null;
  }
  matchPassword(c: AbstractControl): { [key: string]: boolean } {
    if (c.get("user_password").value !== c.get("user_confirm_password").value) {
      return { sarkhanathi: true };
    }
    return null;
  }
}
