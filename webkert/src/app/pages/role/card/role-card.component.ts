import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { UserRole } from 'src/app/models/UserRole';

@Component({
  selector: 'app-role-card',
  templateUrl: './role-card.component.html',
  styleUrls: ['./role-card.component.scss']
})
export class RoleCardComponent implements OnInit {
  @Input() role: UserRole = {} as any;
  @Output() getRole = new EventEmitter<UserRole>();

  constructor() { }

  ngOnInit(): void {
  }

}
