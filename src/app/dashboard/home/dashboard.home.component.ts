import { Component, OnInit } from '@angular/core';
import { VaultService } from '../../service/vault.service';

@Component({
  selector: 'home',
  templateUrl: 'dashboard-home.html'
})

export class DashboardHomeComponent implements OnInit {
  model: any = {}
  loading = false;
  buttonLabel: string = "Query";

  title: string = 'Dashboard';

  results: boolean = false;


  constructor(private vaultService: VaultService) { }

  getPath() {
    this.buttonLabel = "Please wait...";
    this.loading = true;
    console.log("Querying server: " + localStorage.getItem("vaultAddr"));
    console.log(`Looking for data at: ${this.model.vaultPath}`);
    let token = localStorage.getItem("vaultToken");
    console.log(`Using token: ${token}`);
    this.vaultService.queryPath(localStorage.getItem("vaultToken"), localStorage.getItem("vaultAddr"), this.model.vaultPath).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.model.results = JSON.stringify(data.data);
        this.results = true;
      },
      error => {
        console.log(error);
        this.buttonLabel = "Query";
        this.loading = false;
      },
      () => {
        this.buttonLabel = "Query";
        this.loading = false;
      });
  }

  ngOnInit() {

  }
}
