import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';


@Component({
  selector: 'app-output-data',
  templateUrl: './out-data.component.html',
  styleUrls: ['./out-data.component.scss'],
})
export class OutDataComponent {
  constructor(private ds: DataService) {}
  public element: string;
  public getData(){
    return this.ds.getData();
  }
  public deleteItem(element: string) {
    this.ds.deleteItem(element);
  }
}
