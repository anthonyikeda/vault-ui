import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './home/dashboard.home.component';
import { RolesComponent } from './roles/roles.component';
import { CanActivateGuard } from '../service/can_activate_guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardHomeComponent },
  { path: 'roles', component: RolesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
