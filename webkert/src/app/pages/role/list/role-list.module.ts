import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RoleAddModule } from '../add/role-add.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RoleCardModule } from '../card/role-card.module';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { RoleListRoutingModule } from './role-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [RoleListComponent],
  imports: [
    CommonModule, RoleListRoutingModule, MatToolbarModule, ContainerModule, RoleCardModule, MatButtonModule, MatIconModule, RoleAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule
  ]
})
export class RoleListModule { }
