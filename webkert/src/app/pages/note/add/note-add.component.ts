import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {
  today: number = Date.now();
  valami = (new Date).toLocaleDateString();
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    userID: new FormControl(localStorage.getItem('userUID')),
    noteName: new FormControl(''),
    noteDesc: new FormControl(''),
    createDate: new FormControl(this.valami)
  });

  constructor(public dialogRef: MatDialogRef<NoteAddComponent>) { }

  ngOnInit(): void {
  }

}
