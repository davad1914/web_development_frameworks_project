import { LoginRoutingModule } from './login-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, LoginRoutingModule, MatCardModule, MatButtonModule, NavModule
  ]
})
export class LoginModule { }
