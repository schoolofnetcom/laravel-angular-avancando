import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppHttpService } from '../../app-http.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  public user: object = {};

  constructor(private service: AppHttpService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.service.build('users')
      .create(this.user)
      .subscribe(() => {
        this.router.navigate(['/users']);
      });
  }

}
