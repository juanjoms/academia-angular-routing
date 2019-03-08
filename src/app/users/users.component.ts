import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService,
              private router: Router) {}

  users;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}

