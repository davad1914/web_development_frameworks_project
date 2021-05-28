import { Note } from './../../../models/notes.model';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() note: Note = {} as any;
  @Output() getNote = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {
  }

}
