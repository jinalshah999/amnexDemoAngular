import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Todo } from "./todo";
import { Observable } from "rxjs";
import { TododataService } from "./tododata.service";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class TodoResolverService implements Resolve<Todo> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Todo> {
    
    return this._tododata.getAllTodos().pipe(
      map((x: Todo) => {
        console.log(x);
        return x;
      })
    );
  }
  constructor(private _tododata: TododataService) {}
}
