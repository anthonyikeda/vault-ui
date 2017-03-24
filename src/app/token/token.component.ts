import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from './token.service';
import { VaultService } from '../service/vault.service';

@Component({
  moduleId: module.id,
  templateUrl: './token.html'
})

export class TokenComponent implements OnInit {
  model: any = {}
  returnUrl: string;
  loading = false;
  buttonLabel: string = "Test Connection";
  ready = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router,
              private tokenService: TokenService,
              private vaultService: VaultService) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  readToken() {
    console.log("Vault token to use is: " + this.model.token);
  }

  testConnection() {
    if( this.ready ) {
      // We have the ability to connect!
      this.router.navigate(['/dashboard']);
    } else {
      this.vaultService.testVaultConnection(this.model.token, this.model.addr).subscribe(
        data => {
          console.log("Status: " + data);
          this.buttonLabel = "Connect";
          localStorage.setItem("vaultToken", this.model.token);
          localStorage.setItem("vaultAddr", this.model.addr);
          this.ready = true;
        },
        error => {
          console.log(error);
          this.errorMessage = error;
        });
    }

  }
}
