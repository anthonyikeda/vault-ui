import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VaultService {

  constructor(private http: Http) {

  }

  testVaultConnection(token: string, addr: string) {
    let url = `http://localhost:8080/validate?addr=${addr}`;
    let headers = new Headers({'Content-Type': 'text/plain', 'X-Vault-Token' : token});
    let options = new RequestOptions({headers: headers});

    return this.http.post(url, options).map(this.extractData);
  }

  private extractData(response: Response) {
    let body = response.json();
    console.log("Data is: " + JSON.stringify(body));
    return body;
  }

  queryPath(token: string, addr: string, path: string) {
    let url = `http://localhost:8080/query?addr=${addr}&path=${path}`;
    let headers = new Headers({'X-Vault-Token' :  token});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, null, options).map(this.extractData);
  }

  listRoles(token: string, addr: string) {
    let url = `http://localhost:8080/roles?addr=${addr}`;
    let headers = new Headers({'X-Vault-Token' :  token});
    let options = new RequestOptions({headers: headers});
    return this.http.get(url, options).map(this.extractData);
  }
}
