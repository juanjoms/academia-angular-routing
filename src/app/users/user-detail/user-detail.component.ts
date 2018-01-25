import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-detail',
  templateUrl: 'user-detail.component.html',
  styleUrls: ['user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  constructor(private _userService: UsersService,
              private activatedRoute: ActivatedRoute) {}

  user;
  userId;

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      console.log('res', res);
      this.getUser(res.id);
    });
  }

  getUser(id) {
    this._userService.getUser(id).subscribe(res => {
      console.log('res2', res);
      this.user = res;
      this.user = JSON.parse(this.user._body);
    });
  }
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}
