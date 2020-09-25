import { Component } from "@angular/core";
import { SignINModel } from "src/app/services/interfaces/AccountModels";


@Component({
  selector: "app-signin",
  templateUrl: "signin.component.html",
  styleUrls: [
    "signin.component.scss"
  ]
})
export class SignInComponent {

  model: SignINModel = { email: "", password: "" };

  submitted: boolean = false;

  onSubmit(): void {
    this.submitted = true;
  }
}