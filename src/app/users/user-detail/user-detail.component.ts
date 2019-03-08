import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: 'user-detail.component.html',
  styleUrls: ['user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  constructor(private userService: UserService,
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
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}
