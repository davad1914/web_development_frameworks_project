import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  alertMessage = '';
  alertsList: any = {
    alreadyInUseEmail: () => 'Ez az Email már foglalt!',
    invalidEmail: () => 'Nem megfelelő email!.',
    password: () => 'Jelszavak nem egyeznek!',
    false: () => ''
  };

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.registration();
  }

  constructor(private router: Router, private authService: AuthService) { }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  registration(): void {
    if (this.form.valid) {
      if (this.form.value.password1 === this.form.value.password2) {
        console.log(this.form.value);
        this.authService.register(this.form.value.email, this.form.value.password1).then(
          result => {
            console.log(result);
            this.navTo('/login');
          },
          (error) => {
            this.alertMessage = (error.code === 'auth/email-already-in-use' || error.code === 'auth/invalid-email')
              ? this.alertsList.alreadyInUseEmail() : this.alertsList.invalidEmail();
          }
        );
      }else{
        this.alertMessage = this.alertsList.password();
      }
    }
    return;
  }
}
