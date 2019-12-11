import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
user_signup:FormGroup;
  constructor() { }

  ngOnInit() {
    this.user_signup=new FormGroup({
      user_name:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z]*')]),
      user_password:new FormControl(null)
    });
  }
  onUserAdd(){
    console.log(this.user_signup);
  }

}
