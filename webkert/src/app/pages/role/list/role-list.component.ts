import { FbBaseService } from '../../../services/fb-base.service';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RoleAddComponent } from '../add/role-add.component';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/models/UserRole';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  title = 'Jogosultságok';
  list$: Observable<UserRole[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<UserRole>, private dialog: MatDialog, private router: Router) { }

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
    this.list$ = this.service.get('roles','involvementRole').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RoleAddComponent, {
      maxHeight: '90vh'
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((role: UserRole) => {
      console.log(role);
      if (role?.involvementRole) {
        this.service.add('roles', role).then(id => { console.log(id); });
      }
    }, err => {
      console.warn(err);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onGetRole(event: UserRole): void {
    this.router.navigateByUrl('/roleDetails/role/' + event.id);
  }
}
