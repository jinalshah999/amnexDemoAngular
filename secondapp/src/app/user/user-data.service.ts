import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
private users:Users[]=[
  new Users('jinal','123','12342425','ahmedabad'),
  new Users('dhruti','323','12353656','baroda'),
  new Users('jinansh','43654','35463456','rajkot')
];
  constructor() { }
  getAllUsers():Users[]{
    return this.users;
  }
  addUser(obj:Users){
  //this.users= this.users.concat(obj);
  this.users.push(obj);

  }
  deleteUser(obj:Users){
    this.users.splice(this.users.indexOf(obj),1);
  }
  findUser(user_name:string):Users[]{
   return this.users.filter((x)=>x.user_name==user_name);
  }
}
