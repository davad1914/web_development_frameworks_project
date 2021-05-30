import { Note } from '../../../models/notes.model';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note = {} as any;
  @Output() getNote = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {
  }

}
