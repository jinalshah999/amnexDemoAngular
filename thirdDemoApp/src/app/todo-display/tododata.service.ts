import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class TododataService {
  private url: string = environment.url + "tasks/";
  getAllTodos() {
    return this._http.get(this.url);
  }
  constructor(private _http: HttpClient) {}
}
