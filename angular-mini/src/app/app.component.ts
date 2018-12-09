import { Component } from '@angular/core';
import { UsersService } from './users.service'; // import new service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService] // register new service
})
export class AppComponent {
  users = []; // 'this.users' later

  constructor(private usersService: UsersService) { // initialize new service
    this.users = this.usersService.users
  }
}
