import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  getAllUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
