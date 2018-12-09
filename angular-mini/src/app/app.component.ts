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

  // For service injection
  constructor(private usersService: UsersService) {} // initialize new service

  // Callback for initialize
  ngOnInit() { // components life cycle stage
    this.users = this.usersService.users
  }
}
