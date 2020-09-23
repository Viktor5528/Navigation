import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inp-data',
  templateUrl: './inp-data.component.html',
  styleUrls: ['./inp-data.component.scss'],
})
export class InpDataComponent {

  public dataValue: string;

  constructor(private dataservice: DataService) { }

  public save(): void {

    this.dataservice.addData(this.dataValue);
    this.dataValue = null;
  }
}
