import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private _usersService: UsersService,
              private router: Router) {}

  users;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._usersService.getAllUsers().subscribe(res => {
      this.users = res;
      this.users = JSON.parse(this.users._body);
    });
  }

  goToUserDetail(id) {
    this.router.navigate(['users', id]);
  }
}

