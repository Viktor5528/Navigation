import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account-service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private http: AccountService) { }

  ngOnInit(): void {
  }

}
