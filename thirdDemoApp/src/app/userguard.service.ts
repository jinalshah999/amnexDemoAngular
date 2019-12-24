import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route,
  CanLoad
} from "@angular/router";
import { RegistrationService } from './registration.service';


@Injectable({
  providedIn: "root"
})
export class UserguardService implements CanActivate,CanLoad {
  constructor(private _router:Router,private _regData:RegistrationService) {}
  canLoad(_route:Route):boolean{
    if (localStorage.getItem("user_name") != null) {
      return true;
    } else {
      this._regData.redirectURL=_route.path;
      this._router.navigate(['/login']);
      return false;
    }
  }
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    console.log(localStorage.getItem('user_name'));
    if (localStorage.getItem("user_name") != null) {
      return true;
    } else {
      this._regData.redirectURL=_state.url;
      this._router.navigate(['/login']);
      return false;
    }
  }
}
