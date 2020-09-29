import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Theme } from '../services/enums/theme.enum';
import { CreateAnswerModel } from '../services/interfaces/AnswerModels';
import { CreateQuestionModel } from '../services/interfaces/QuestionModel';
import { QuestionService } from '../services/question-service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {

  errorMessage: string;
  questionForm: FormGroup;
  model: CreateQuestionModel;
  answerModel: CreateAnswerModel;

  constructor(private http: QuestionService, private route: Router) {
    this.questionForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(10)]),
      answers: new FormArray([
        new FormGroup({
          text: new FormControl('', Validators.required),
          isCorrect: new FormControl()
        })
      ]),
      complexity: new FormControl('', [Validators.required]),
      theme: new FormControl(1, Validators.required)
    });
  }
  public addAnswer() {

    (this.questionForm.controls.answers as FormArray).controls.push(
      new FormGroup({
        text: new FormControl('', Validators.required),
        isCorrect: new FormControl('', Validators.required)
      }));
  }
  public onSubmit() {
    const complexity = !!this.questionForm.value.complexity;
    // tslint:disable-next-line: radix
    const theme = parseInt(this.questionForm.value.theme);
    this.questionForm.value.answers.map(item => item.isCorrect = !!item.isCorrect);
    this.model = { ...this.questionForm.value, complexity, theme };
    this.http.createQuestion(this.model).subscribe(
      result => {
        if (result) {
          this.route.navigate(['signin']);
        }
      },
      error => {
        this.errorMessage = error.error;
      }
    );
  }
}
