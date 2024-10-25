import { Component } from '@angular/core';
import { UserService } from '../user.service';

interface User{
  name : string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    _userService : UserService;
    users : User[] = [];
    newUser : string = '';

    constructor(private userService : UserService)
    {
      this._userService = userService;
    }
    addUser(newUser : string)
    {
      this._userService.addUser(newUser);
      this.users = this._userService.getUsers();
      this.newUser = '';
    }

    hasUsers() : boolean{
      return this.users.length > 0;
    }
}



