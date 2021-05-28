import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  user = localStorage.getItem('userUID');

  constructor(private router: Router, public auth: AuthService) { }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('login');
  }
}