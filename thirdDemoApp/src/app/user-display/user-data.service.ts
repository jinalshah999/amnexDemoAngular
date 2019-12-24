import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
private _url:string=environment.url+"users/"
private _header:string='Content-Type';
private _headervalue:string='application/json';


  constructor(private _http:HttpClient) { }

  getAllUsers(){
    return this._http.get<User[]>(this._url);
  }
  getUserById(email:string){
    return this._http.get<User[]>(this._url+email);
  }
  addUser(obj:User){
    const body=JSON.stringify(obj);
    const head=new HttpHeaders().set(this._header,this._headervalue);
    return this._http.post(this._url,body,{headers:head});
  }
  deleteUser(obj:User){
    const head=new HttpHeaders().set(this._header,this._headervalue);
    return this._http.delete(this._url+obj.user_email,{headers:head});
  }
  editUser(obj:User){
    const body=JSON.stringify(obj);
    const head=new HttpHeaders().set(this._header,this._headervalue);
    return this._http.put(this._url+obj.user_email,body,{headers:head});
  }
}
