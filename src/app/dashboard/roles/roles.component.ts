import { Component, OnInit } from '@angular/core';
import { VaultService } from '../../service/vault.service';

@Component({
  moduleId: module.id,
  templateUrl: 'roles.html'
})

export class RolesComponent implements OnInit {
  status: string = "List";
  loading: boolean = false;
  roles: string[];

  constructor(private vaultService: VaultService) {}

  ngOnInit() {
    let token = localStorage.getItem('vaultToken');
    let addr = localStorage.getItem('vaultAddr');

    this.vaultService.listRoles(token, addr).subscribe(
      data => {
        console.log(data);
        this.roles = data.data.keys;
        console.log(data.data.keys[0]);
      },
      error => {
        console.log(error);
        this.roles = [];
      },
      () => {

      }
    )
  }
}
