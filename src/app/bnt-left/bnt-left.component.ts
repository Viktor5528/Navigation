import { Component, Input } from "@angular/core";

@Component({
  selector: "app-btn-left",
  templateUrl: "./bnt-left.component.html",
  styleUrls: ["./bnt-left.component.scss"]
})
export class BtnLeftComponent {
  @Input()
  public url: string;
  constructor() { }


}
