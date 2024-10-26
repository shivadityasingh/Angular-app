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
    users : User[] = [];
    newUser : string = '';

    constructor(private userService : UserService)
    {
    }
    addUser(newUser : string)
    {
      this.userService.addUser(newUser);
      this.users = this.userService.getUsers();
      this.newUser = '';
    }

    hasUsers() : boolean{
      return this.users.length > 0;
    }
}



