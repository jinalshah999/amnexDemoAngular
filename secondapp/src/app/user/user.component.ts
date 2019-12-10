import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  onUserSubmit(f){
    this._data.addUser(f.value);
  }
  constructor(private _data:UserDataService) { }

  ngOnInit() {
  }

}
