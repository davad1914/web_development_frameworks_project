import { FbBaseService } from '../../../services/fb-base.service';
import { Note } from '../../../models/notes.model';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NoteAddComponent } from '../add/note-add.component';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  title = 'Jegyzetek';
  list$: Observable<Note[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<Note>, private dialog: MatDialog, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.getNotes();
    this.filteredOptions$ = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map(value => this._filter(value))
      );
  }

  getNotes(): void {
    this.errorObject = null;
    this.list$ = this.service.getNotes('notes').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  close(): void {
    this.location.back();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NoteAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((note: Note) => {
      console.log(note);
      if (note?.noteName) {
        this.service.add('notes', note).then(id => { console.log(id); });
      }
    }, err => {
      console.warn(err);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onGetNote(event: Note): void {
    this.router.navigateByUrl('/noteDetails/note/' + event.id);
  }
}
