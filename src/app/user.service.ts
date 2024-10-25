import { Injectable } from '@angular/core';

interface User{
  name : string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private users : User[] = [];

  addUser(userName : string){
    this.users.push({name : userName})
  };

  getUsers() : User[]{
    return this.users;
  }
}
