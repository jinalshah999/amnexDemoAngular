import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { EditUserComponent } from "./edit-user/edit-user.component";

@Injectable({
  providedIn: "root"
})
export class UsereditguardService implements CanDeactivate<EditUserComponent> {
  canDeactivate(
    component: EditUserComponent,
    activate: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    return confirm('asdfasdfasdfasdf');
  }
  constructor() {}
}
