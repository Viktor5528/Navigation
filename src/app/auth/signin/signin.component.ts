import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account-service';
import { SignINModel } from 'src/app/services/interfaces/AccountModels';


@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: [
    'signin.component.scss'
  ]
})
export class SignInComponent {
  constructor(private http: AccountService) {

  }
  model: SignINModel = { email: '', password: '' };
  token;
  errorMessage: string;

  submitted = false;

  onSubmit(): void {
    this.http.SignIN(this.model).subscribe(
      result => {
        if (result) {
          this.token = result;
          console.log(this.token.token);
        }
      },
      error => {
        this.errorMessage = error.error;
      }
    );
  }
}
