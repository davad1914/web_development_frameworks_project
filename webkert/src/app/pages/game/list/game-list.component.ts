import { FbBaseService } from './../../../services/fb-base.service';
import { Note } from './../../../models/notes.model';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GameAddComponent } from '../add/game-add.component';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  title = 'Jegyzetek';
  list$: Observable<Note[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<Note>, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions$ = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map(value => this._filter(value))
      );
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('notes').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GameAddComponent, {});
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
    this.router.navigateByUrl('/details/note/' + event.id);
  }
}
