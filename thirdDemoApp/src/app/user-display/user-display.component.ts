import { Component, OnInit } from "@angular/core";
import { UserDataService } from "./user-data.service";
import { User } from "./user";
import { Router } from '@angular/router';

@Component({
  selector: "app-user-display",
  templateUrl: "./user-display.component.html",
  styleUrls: ["./user-display.component.css"]
})
export class UserDisplayComponent implements OnInit {
  users: User[] = [];
  constructor(private _userdata: UserDataService,private _router:Router) {}
  onDelete(item: User) {
    if(confirm('Are u sure?')){
    this._userdata.deleteUser(item).subscribe(x => {
      if (x['affectedRows'] ==1) {
        this.users.splice(this.users.indexOf(item), 1);
      }
    });
  }
  }
  onEdit(item:User){
    this._router.navigate(['/users/edit',item.user_email]);
  }
  ngOnInit() {
    this._userdata.getAllUsers().subscribe(
      x => {
        this.users = x;
      },
      function(error) {
        console.log(error);
      },
      function() {}
    );
  }
}
