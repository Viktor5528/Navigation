import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../data.service';
import { SnackComponent } from '../snack/snack.component'

@Component({
  selector: 'app-inp-data',
  templateUrl: './inp-data.component.html',
  styleUrls: ['./inp-data.component.scss'],
})
export class InpDataComponent {

  public dataValue: string;

  constructor(private _dataservice: DataService, private _snackBar: MatSnackBar ) { }

  public save(): void {
    this._snackBar.openFromComponent(SnackComponent,{duration:1000});
    this._dataservice.addData(this.dataValue);
    this.dataValue = null;
  }
}
