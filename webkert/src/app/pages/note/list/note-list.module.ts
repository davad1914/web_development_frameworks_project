import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NoteAddModule } from '../add/note-add.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NoteCardModule } from '../card/note-card.module';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { NoteListRoutingModule } from './note-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListComponent } from './note-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [NoteListComponent],
  imports: [
    CommonModule, NoteListRoutingModule, MatToolbarModule, ContainerModule, NoteCardModule, MatButtonModule, MatIconModule, NoteAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule
  ]
})
export class NoteListModule { }
