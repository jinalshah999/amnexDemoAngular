import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { UserDataService } from '../user-data.service';
import { User } from '../user';

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  blankObj:User=new User('','','','');
  userForm: FormGroup;
  constructor(private _userdata:UserDataService) {}
  onUserSubmit(){
    this._userdata.addUser(this.userForm.value).subscribe(
      (x)=>{
        alert('added');
        this.clearForm();
      }
    );
  }
  ngOnInit() {
    this.buildForm();

  }
  /// utility methods
    buildForm():void {
    this.userForm = new FormGroup({
      user_email: new FormControl(null),
      user_name: new FormControl(null),
      user_password: new FormControl(null),
      user_mobile_no: new FormControl(null)
    });
  }
  clearForm(){
    this.userForm.patchValue(this.blankObj);
  }
}
