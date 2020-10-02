import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account-service';
import { SignINModel } from 'src/app/services/interfaces/AccountModels';
import { URLs } from 'src/app/services/URL';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.scss'],
})
export class SignInComponent {
  constructor(private http: AccountService, private route: Router) {}
  model: SignINModel = { email: '', password: '' };
  errorMessage: string;

  submitted = false;

  onSubmit(): void {
    this.http.SignIN(this.model).subscribe(
      (result) => {
        if (result) {
          const token = result.token;
          localStorage.setItem('token', token);
          this.route.navigate(['']);
        }
      },
      (error) => {
        this.errorMessage = error.error;
      },
    );
  }
}
