import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz-service';

@Component({
  selector: 'app-ready-quizzes',
  templateUrl: './ready-quizzes.component.html',
  styleUrls: ['./ready-quizzes.component.scss'],
})
export class ReadyQuizzesComponent implements OnInit {
  public error: string;
  public quizzes: any[];

  constructor(private http: QuizService) {}

  ngOnInit(): void {
    this.http.getQuizzes().subscribe(
      (result) => {
        console.log(result);
        this.quizzes = result;
      },
      (error) => {
        this.error = error.title;
      },
    );
  }
}
