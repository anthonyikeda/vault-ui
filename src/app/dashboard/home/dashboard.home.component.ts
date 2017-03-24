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

  constructor(private vaultService: VaultService) { }

  getPath() {
    this.buttonLabel = "Please wait...";
    this.loading = true;
    console.log("Querying server: " + localStorage.getItem("vaultAddr"));
    console.log("Looking for data at: " + this.model.vaultPath);
    this.buttonLabel = "Query";
    this.loading = false;
  }

  ngOnInit() {

  }
}
