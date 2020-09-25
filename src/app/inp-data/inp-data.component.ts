import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { DataService } from "../data.service";
import { AccountService } from "../services/account-service";
import { SignINModel } from "../services/interfaces/AccountModels";
import { SnackComponent } from "../snack/snack.component";


@Component({
  selector: "app-inp-data",
  templateUrl: "./inp-data.component.html",
  styleUrls: ["./inp-data.component.scss"],
})
export class InpDataComponent {
  public tokenValue: Observable<any>;
  public dataValue: string;

  public body: SignINModel = { email: "strqweing@gmail.com", password: "S@strin321g" };

  constructor(private _dataservice: DataService, private _snackBar: MatSnackBar, private http: AccountService) { }

  public signIn() {
    this.tokenValue = this.http.SignIN(this.body);
  }
  public save(): void {
    this._snackBar.openFromComponent(SnackComponent, { duration: 1000 });
    this._dataservice.addData(this.dataValue);
    this.dataValue = null;
  }
}
