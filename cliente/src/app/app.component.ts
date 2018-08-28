import { Component } from '@angular/core';
import { AppHttpService } from './app-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular e Laravel';
  isLogged = false;

  constructor(private service: AppHttpService) {}

  ngOnInit() {
    let urlParts = window.location.href.split('#');

    if (urlParts[1]) {
      urlParts = urlParts[1].split('&');
      urlParts.forEach((item, key) => {
        item = item.split('=');
        urlParts[item[0]] = item[1];
        urlParts.splice(key, 1);
      });
      window.localStorage.setItem('token', urlParts['access_token']);
    }

    if (window.localStorage.getItem('token')) {
      this.isLogged = true;
    } else {
      this.service.auth();
    }
  }

  login($event) {
    $event.preventDefault();
    this.service.auth();
  }

  logout($event) {
    window.localStorage.removeItem('token');
    window.location = window.location.href;
  }
}
