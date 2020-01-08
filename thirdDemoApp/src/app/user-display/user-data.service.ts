import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "./user";
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class UserDataService {
  private _url: string = environment.url + "users/";
  private _header: string = "Content-Type";
  private _headervalue: string = "application/json";

  constructor(private _http: HttpClient) {}

  //AllUsers

  users$ = this._http.get<User[]>(this._url).pipe(
    tap(data=>console.log('Users',JSON.stringify(data))),
    catchError(this.handleError)
  );
  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  getAllUsers() {
    return this._http.get<User[]>(this._url);
  }
  getUserById(email: string) {
    return this._http.get<User[]>(this._url + email);
  }
  addUser(obj: User) {
    const body = JSON.stringify(obj);
    const head = new HttpHeaders().set(this._header, this._headervalue);
    return this._http.post(this._url, body, { headers: head });
  }
  deleteUser(obj: User) {
    const head = new HttpHeaders().set(this._header, this._headervalue);
    return this._http.delete(this._url + obj.user_email, { headers: head });
  }
  editUser(obj: User) {
    const body = JSON.stringify(obj);
    const head = new HttpHeaders().set(this._header, this._headervalue);
    return this._http.put(this._url + obj.user_email, body, { headers: head });
  }
}
