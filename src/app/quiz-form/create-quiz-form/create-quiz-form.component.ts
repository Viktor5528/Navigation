import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizService } from 'src/app/services/quiz-service';
import { QuizFormComponent } from '../quiz-form.component';

@Component({
  selector: 'app-create-quiz-form',
  templateUrl: './create-quiz-form.component.html',
  styleUrls: ['./create-quiz-form.component.scss'],
})
export class CreateQuizFormComponent implements OnInit {
  public errorText: string;

  @ViewChild(QuizFormComponent)
  private child: QuizFormComponent;

  constructor(private http: QuizService) {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    this.http.createQuiz(event).subscribe(
      (result) => {
        if (result) {
          this.child.quizForm.reset();
        }
      },
      (error) => {
        this.errorText = error.message;
      },
    );
  }
}
