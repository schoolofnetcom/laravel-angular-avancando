import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  private url: string;
  private httpOptions: object;

  constructor(private http: HttpClient) {
    console.log('service-construtor');
  }

  build(url) {
    this.url = 'http://localhost:8000/api/v1/' + url;

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      })
    };

    return this;
  }

  list(page = null) {
    if (page) {
      this.url += '?page=' + page;
    }
    return this.http.get(this.url, this.httpOptions);
  }

  auth() {
    let url = 'http://localhost:8000/oauth/authorize?';
    url += 'client_id=3&';
    url += 'redirect_uri=http://localhost:4200/users&';
    url += 'response_type=token&';
    url += 'scope=';
    window.location = url;
  }

  search(term) {
    this.url += '?q=' + term;
    return this.http.get(this.url, this.httpOptions);
  }

  create(data) {
    return this.http.post(this.url, data, this.httpOptions);
  }

  get(id) {
    return this.http.get(this.url + '/' + id, this.httpOptions);
  }

  update(id, data) {
    return this.http.put(this.url + '/' + id, data, this.httpOptions);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id, this.httpOptions);
  }
}
