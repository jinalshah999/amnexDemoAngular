import { Component } from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "thirdDemoApp";
  isLoading: boolean = true;
  constructor(private _router: Router) {
    this.checkRoutes(this._router);
  }
  checkRoutes(_router:Router){
    _router.events.subscribe(
      (x)=>{
        if(x instanceof NavigationStart){
          this.isLoading=true;
        }
        if(x instanceof NavigationEnd ||
          x instanceof NavigationCancel ||
          x instanceof NavigationError ){
            this.isLoading=false;
          }
      }
    );
  }

}
