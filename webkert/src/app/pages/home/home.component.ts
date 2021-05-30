import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService) {}

   ngOnInit(){
    var user = this.authService.currentUser();

    console.log(user);
    console.log(this.authService.authenticated());
   }

   ngAfterContentInit(): void{
    console.log("back");
  }

}
