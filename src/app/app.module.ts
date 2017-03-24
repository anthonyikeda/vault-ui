import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppRoutingModule } from './app.routing';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TokenComponent } from './token/token.component';

import { AuthService } from './service/auth.service';
import { TokenService } from './token/token.service';
import { VaultService } from './service/vault.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    AppRoutingModule,
    DashboardRoutingModule
  ],
  providers: [AuthService, TokenService, VaultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
