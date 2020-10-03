import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-quiz-form',
  templateUrl: './update-quiz-form.component.html',
  styleUrls: ['./update-quiz-form.component.scss'],
})
export class UpdateQuizFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(value: any) {
    //send on update endpoint
    //patch or set use
  }
}
