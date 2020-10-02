import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { getThemeArray } from '../services/interfaces/themeArrayFunction';

import { QuizService } from '../services/quiz-service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss'],
})
export class QuizFormComponent implements OnInit {
  themeArray = getThemeArray();
  quizForm: FormGroup;
  error: string;

  constructor(private http: QuizService) {}

  public addQuestion() {
    (this.quizForm.controls.questions as FormArray).controls.push(
      new FormGroup({
        text: new FormControl('', Validators.required),
        answers: new FormArray([
          new FormGroup({
            text: new FormControl('', Validators.required),
            isCorrect: new FormControl(true),
          }),
        ]),
        complexity: new FormControl(true),
        theme: new FormControl('', Validators.required),
      }),
    );
  }
  public addAnswer(formArray) {
    console.log(formArray);
    if (formArray.value.length < 4) {
      formArray.push(
        new FormGroup({
          text: new FormControl('', Validators.required),
          isCorrect: new FormControl(''),
        }),
      );
    } else {
      alert('4 answers max');
    }
  }
  public onSubmit() {
    console.log(this.quizForm.value);
    this.http.createQuiz(this.quizForm.getRawValue()).subscribe(
      (result) => {
        if (result) {
          this.quizForm.reset();
        }
      },
      (error) => {
        this.error = error.error;
      },
    );
  }

  ngOnInit(): void {
    this.quizForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      theme: new FormControl('', Validators.required),
      questions: new FormArray([
        new FormGroup({
          text: new FormControl('', Validators.required),
          answers: new FormArray([
            new FormGroup({
              text: new FormControl('', Validators.required),
              isCorrect: new FormControl(true, Validators.required),
            }),
          ]),
          complexity: new FormControl(true, Validators.required),
          theme: new FormControl('', Validators.required),
        }),
      ]),
    });
  }
}
