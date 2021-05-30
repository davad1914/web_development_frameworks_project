import { ContainerModule } from '../../shared/components/container/container.module';
import { SplashScreenRoutingModule } from './tasks-routing.module';
import { OnHoverModule } from '../../shared/directives/on-hover/on-hover.module';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { Tasks } from './tasks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [Tasks],
  imports: [
    CommonModule, SplashScreenRoutingModule, MatCardModule, MatRippleModule, OnHoverModule, ContainerModule, MatTooltipModule
  ]
})
export class SplashScreenModule { }
