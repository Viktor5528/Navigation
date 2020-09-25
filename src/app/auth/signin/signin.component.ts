import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AccountService } from "src/app/services/account-service";
import { SignINModel } from "src/app/services/interfaces/AccountModels";


@Component({
  selector: "app-signin",
  templateUrl: "signin.component.html",
  styleUrls: [
    "signin.component.scss"
  ]
})
export class SignInComponent {
  constructor(private http: AccountService) {

  }
  model: SignINModel = { email: "", password: "" };
  token: Observable<any>;
  submitted = false;

  onSubmit(): void {
    this.token = this.http.SignIN(this.model);
    this.token.subscribe(x => console.log(x.token));
  }
}
