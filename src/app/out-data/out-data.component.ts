import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';


@Component({
  selector: 'app-output-data',
  templateUrl: './out-data.component.html',
  styleUrls: ['./out-data.component.scss'],
})
export class OutDataComponent {
  constructor(private dataservice: DataService) {}
  public element: string;
  public getData(){
    return this.dataservice.getData();
  }
  public deleteItem(element: string) {
    this.dataservice.deleteItem(element);
  }
}
