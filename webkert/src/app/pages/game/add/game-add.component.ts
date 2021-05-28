import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss']
})
export class GameAddComponent implements OnInit {
  today: number = Date.now();
  valami = (new Date).toLocaleDateString();
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    userID: new FormControl(localStorage.getItem('userUID')),
    noteName: new FormControl(''),
    noteDesc: new FormControl(''),
    createDate: new FormControl(this.valami)
  });

  constructor(public dialogRef: MatDialogRef<GameAddComponent>) { }

  ngOnInit(): void {
  }

}
