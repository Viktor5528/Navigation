import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { SignINModel } from '../services/interfaces/AccountModels';
import { SnackComponent } from '../snack/snack.component';


@Component({
  selector: 'app-inp-data',
  templateUrl: './inp-data.component.html',
  styleUrls: ['./inp-data.component.scss'],
})
export class InpDataComponent {
  public tokenValue: Observable<any>;
  public dataValue: string;

  public body: SignINModel = { email: 'strqweing@gmail.com', password: 'S@strin321g' };

  constructor(private dataservice: DataService, private snackBar: MatSnackBar) { }

  public save(): void {
    this.snackBar.openFromComponent(SnackComponent, { duration: 1000 });
    this.dataservice.addData(this.dataValue);
    this.dataValue = null;
  }
}
