import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user:Users[];
  constructor(private acroutes:ActivatedRoute,private _data:UserDataService) { }
  user_name:string;
  ngOnInit() {
this.user_name=this.acroutes.snapshot.params["user_name"];
    this.user=this._data.findUser(this.user_name);
    console.log(this.user[0]);
  }

}
