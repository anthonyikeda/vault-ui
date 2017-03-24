import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VaultService {

  constructor(private http: Http) {

  }

  testVaultConnection(token: string, addr: string) {
    let url = "http://localhost:8080/validate?token=" + token + "&addr=" + addr;
    let headers = new Headers({'Content-Type': 'text/plain'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(url, options).map(this.extractData);
  }

  private extractData(response: Response) {
    let body = response.json();
    console.log("Health status is: " + JSON.stringify(body));
    return body;
  }
}
