import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegistrationService } from "../registration.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private _regData: RegistrationService) {}

  ngOnInit() {}
  onLogOutClick() {
    this._regData.logout();
  }
  get isLoggedIn():boolean{
    return this._regData.isLoggedIn;
  }
}
