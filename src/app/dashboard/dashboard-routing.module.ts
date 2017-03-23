import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './home/dashboard.home.component';
import { CanActivateGuard } from '../service/can_activate_guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardHomeComponent , canActivate: [CanActivateGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
