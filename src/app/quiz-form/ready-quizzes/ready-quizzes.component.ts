import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz-service';
import { QuizUpdateHelper } from 'src/app/services/quizUpdateHelper';

@Component({
  selector: 'app-ready-quizzes',
  templateUrl: './ready-quizzes.component.html',
  styleUrls: ['./ready-quizzes.component.scss'],
})
export class ReadyQuizzesComponent implements OnInit {
  public error: string;
  public quizzes: any[];
 

  constructor(private http: QuizService, private router: Router, private quizUpdateHelper: QuizUpdateHelper) {}

  ngOnInit(): void {
    this.http.getQuizzes().subscribe(
      (result) => {
        this.quizzes = result;
      },
      (error) => {
        this.error = error.message;
      },
    );
  }
  public update(id: number) {
    this.quizUpdateHelper.set(id);
    this.router.navigate(['updatequiz']);
  }
}
