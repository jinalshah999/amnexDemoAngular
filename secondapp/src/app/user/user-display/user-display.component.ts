import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  users:Users[];
  constructor(private _data:UserDataService,private _router:Router) { }

  ngOnInit() {
    this.users=this._data.getAllUsers();
  }
  onUserDelete(item:Users){
    this._data.deleteUser(item);
  }
  onUserDetails(item:Users){
    this._router.navigate(['/userdetails',item.user_name]);
  }

}
