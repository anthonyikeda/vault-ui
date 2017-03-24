import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private loggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private http: Http) {
    this.loggedIn.next(!!localStorage.getItem('authToken'));
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  /*
    Currently not in use but added for future reference
   */
  userLogin(username: string, password: string) {
    let url = "http://192.168.99.100:8200/v1/auth/userpass/login/" + username;
    let body = JSON.stringify({'password': password});
    let headers = new Headers({'Content-Type': 'text/plain'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(url, body, options).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body;
  }
}
