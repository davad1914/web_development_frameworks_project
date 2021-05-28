import { CATEGORIES } from '../../shared/database/category.database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class Tasks {
  categories = CATEGORIES;

  constructor() { }
}
