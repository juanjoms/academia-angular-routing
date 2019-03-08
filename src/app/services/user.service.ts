import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

class User {
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users/';
  private users;

  constructor(private http: HttpClient) {
    this.users = [];
  }

  getAllUsers(): Observable<User[]> {
    if (this.users.length > 0) {
      return of(this.users);
    }
    return this.http.get<User[]>(this.usersUrl).pipe( tap(users => {this.users = users; }) );
  }


  getUser(id): Observable<User> {
    if (this.users[id - 1]) {
      return of(this.users[id - 1]);
    }
    return this.http.get(this.usersUrl + id);
  }
}
