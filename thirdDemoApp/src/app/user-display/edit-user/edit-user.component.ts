import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { UserDataService } from "../user-data.service";
import { User } from '../user';

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  isDirty:boolean=false;
  user_email: string = "";
  userForm: FormGroup;
  onUserSubmit(){
    this._userdata.editUser(this.userForm.value).subscribe(
      (x)=>{
        this._router.navigate(['/users']);
      }
    );
  }
  constructor(
    private _acRoute: ActivatedRoute,
    private _userdata: UserDataService,
    private _router:Router
  ) {}

  ngOnInit() {
    this.user_email = this._acRoute.snapshot.params["user_email"];
    this.buildForm();
    this.getUser();
  }
  getUser() {
    this._userdata.getUserById(this.user_email).subscribe(
      (x)=>this.bindUserData(x[0])
    );
  }
  bindUserData(user:User){

    this.userForm.patchValue({
      user_email: user.user_email,
      user_name: user.user_name,
      user_password: user.user_password,
      user_mobile_no:user.user_mobile_no
    });
  }
  buildForm(): void {
    this.userForm = new FormGroup({
      user_email: new FormControl(null),
      user_name: new FormControl(null),
      user_password: new FormControl(null),
      user_mobile_no: new FormControl(null)
    });
  }
}
