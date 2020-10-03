import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz-service';

@Component({
  selector: 'app-create-quiz-form',
  templateUrl: './create-quiz-form.component.html',
  styleUrls: ['./create-quiz-form.component.scss'],
})
export class CreateQuizFormComponent implements OnInit {
  public errorText: string;
  constructor(private http: QuizService) {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    this.http.createQuiz(event).subscribe(
      (result) => {
        if (result) {
          // this.quizForm.reset();
          // ViewChild
        }
      },
      (error) => {
        this.errorText = error.message;
      },
    );
  }
}
