import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserguardService implements CanActivate {
  constructor(private _router:Router) {}
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    console.log(localStorage.getItem('user_name'));
    if (localStorage.getItem("user_name") != null) {
      return true;
    } else {
      this._router.navigate(['/']);
      return false;
    }
  }
}
