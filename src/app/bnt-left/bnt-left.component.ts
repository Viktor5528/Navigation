import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bnt-left',
  templateUrl: './bnt-left.component.html',
  styleUrls: ['./bnt-left.component.scss']
})
export class BntLeftComponent {
  @Input()
  public url: string;
  constructor() { }


}
