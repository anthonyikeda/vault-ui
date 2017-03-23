import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

import {Http, Headers, RequestOptions, Response} from '@angular/http';


@Component({
  moduleId: module.id,
  templateUrl: 'login.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  loading = false;

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  constructor(private http: Http, private loginService: AuthService,
            private route: ActivatedRoute,
            private router: Router,) { }

  login() {
    console.log("Logging in user " + this.model.username);
    this.loading = true;

    this.loginService.userLogin(this.model.username, this.model.password)
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
        console.log("Error logging in user " + this.model.username);
      });
  }

}
