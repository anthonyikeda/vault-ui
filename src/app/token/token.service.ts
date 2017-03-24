import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class TokenService {

  private loggedIn: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.loggedIn.next(!!localStorage.getItem('vault-token'));
  }

  get isTokenPresent() {
    return this.loggedIn.asObservable();
  }

  tokenLogin(token: string, vaultAddr: string) {
    localStorage.setItem('vault-token', token);
    localStorage.setItem('vault-address', vaultAddr);
  }
}
