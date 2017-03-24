import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CanActivateGuard } from '../service/can_activate_guard';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './home/dashboard.home.component';
import { RolesComponent } from './roles/roles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardHomeComponent, RolesComponent],
  providers: [ CanActivateGuard ]
})
export class DashboardModule { }
