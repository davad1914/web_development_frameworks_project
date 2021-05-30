import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {
  today: number = Date.now();
  valami = (new Date).toLocaleDateString();
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    href: new FormControl(''),
    involvementRole: new FormControl(''),
    function: new FormControl(''),
    action: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<RoleAddComponent>) { }

  ngOnInit(): void { 
  }

}
