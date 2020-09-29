import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account-service';
import { SignUPModel } from 'src/app/services/interfaces/AccountModels';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  signUpform: FormGroup;
  model: SignUPModel;
  errorMessage: string;
  constructor(private http: AccountService, private route: Router) {

    this.signUpform = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99)]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.model = this.signUpform.value;
    this.model.passwordConfirm = this.model.password;
    this.http.SignUP(this.model).subscribe(
      result => {
        if (result) {
          this.route.navigate(['signin']);
        }
      },
      error => {
        this.errorMessage = error.error;
      }
    );
  }

}
