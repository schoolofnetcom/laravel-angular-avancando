import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppHttpService } from '../../app-http.service';

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.css']
})
export class UsersShowComponent implements OnInit {

  public user: object = {};

  constructor(private service: AppHttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.view(params.id));
  }

  view(id) {
    this.service.build('users')
      .get(id)
      .subscribe((data) => this.user = data);
  }

  delete(id) {
    if (confirm('Você tem certeza?')) {
      this.service.build('users')
        .delete(id)
        .subscribe(() => {
          this.router.navigate(['/users']);
        });
    }
  }

}
