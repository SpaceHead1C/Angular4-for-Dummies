import { Component } from '@angular/core';
import { UsersService } from './users.service'; // import new service
import { RandomUsers } from './user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService] // register new service
})

export class AppComponent {
  users = []; // 'this.users' later
  searchStr = '';

  // For service injection
  constructor(private usersService: UsersService) { } // initialize new service

  // Callback for initialize
  ngOnInit() { // components life cycle stage
    this.usersService.getUsers().subscribe((response: RandomUsers) => {
      this.users = response.results.map(user => {
        return {
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          geo: `${user.location.city}; ${user.location.state}; ${user.location.street}`
        };
      })
    })
  }
}