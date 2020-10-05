import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateQuizModel } from 'src/app/services/interfaces/QuizModels';
import { QuizService } from 'src/app/services/quiz-service';
import { QuizUpdateHelper } from 'src/app/services/quizUpdateHelper';
import { QuizFormComponent } from '../quiz-form.component';

@Component({
  selector: 'app-update-quiz-form',
  templateUrl: './update-quiz-form.component.html',
  styleUrls: ['./update-quiz-form.component.scss'],
})
export class UpdateQuizFormComponent implements OnInit {
  errorText: string;
  @ViewChild(QuizFormComponent)
  private child: QuizFormComponent;

  constructor(private http: QuizService, private quizUpdateHelper: QuizUpdateHelper, private router: Router) {}

  ngOnInit(): void {
    this.http.getById(this.quizUpdateHelper.id).subscribe(
      (result) => {
        this.child.formValue = result;
      },
      (error) => {
        this.errorText = error.message;
      },
    );
  }

  onSubmit(value: UpdateQuizModel) {
    value.id = this.quizUpdateHelper.id;
    this.http.updateQuiz(value).subscribe(result=> this.router.navigate(['getquiz']));
  }
}
