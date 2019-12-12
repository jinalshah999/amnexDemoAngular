import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormArray
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
  cities: string[] = ["ahmedabad", "surat", "baroda"];
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
      ),
      user_notification: new FormControl("email"),
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      user_phone: new FormControl(null),
      user_city: new FormControl("ahmedabad", Validators.required),
      user_hobbies: new FormArray([])
    });
    this.user_signup
      .get("user_notification")
      .valueChanges.subscribe(x => this.setValidation(x));
  }
  onUserAdd() {
    console.log(this.user_signup);
  }
  getHobbies() {
    return (<FormArray>this.user_signup.get("user_hobbies")).controls;
  }
  onAddHobbyClick() {
    const cntrl=new FormControl(null);
    (<FormArray> this.user_signup.get('user_hobbies')).push(cntrl);
  }
  onHobbyRemove(i){
    (<FormArray>this.user_signup.get('user_hobbies')).removeAt(i);
  }
  setValidation(value: string): void {
    let emailControl = this.user_signup.get("user_email");
    let phoneControl = this.user_signup.get("user_phone");
    if (value == "email") {
      phoneControl.clearValidators();
      emailControl.setValidators([Validators.required, Validators.email]);
    } else {
      emailControl.clearValidators();
      emailControl.setValidators(Validators.email);
      phoneControl.setValidators(Validators.required);
    }
    emailControl.updateValueAndValidity();
    phoneControl.updateValueAndValidity();
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
