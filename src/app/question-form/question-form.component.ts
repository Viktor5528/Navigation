import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../services/question-service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent {
  error: string;
  questionForm: FormGroup;

  constructor(private http: QuestionService) {
    this.questionForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(10)]),
      answers: new FormArray([
        new FormGroup({
          text: new FormControl('', Validators.required),
          isCorrect: new FormControl(true, Validators.required),
        }),
      ]),
      complexity: new FormControl(true, [Validators.required]),
      theme: new FormControl(1, Validators.required),
    });
  }
  public addAnswer() {
    (this.questionForm.controls.answers as FormArray).controls.push(
      new FormGroup({
        text: new FormControl('', Validators.required),
        isCorrect: new FormControl('', Validators.required),
      }),
    );
  }
  public onSubmit() {
    this.http.createQuestion(this.questionForm.getRawValue()).subscribe(
      (result) => {
        if (result) {
          this.questionForm.reset();
          (this.questionForm.controls.answers as FormArray).controls.splice(1);
        }
      },
      (error) => {
        this.error = error.error;
      },
    );
  }
}
