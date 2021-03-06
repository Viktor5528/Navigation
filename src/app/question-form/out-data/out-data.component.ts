import { Component, OnInit } from '@angular/core';
import { DeleteQuesitonModel } from 'src/app/services/interfaces/QuestionModel';
import { QuestionService } from 'src/app/services/question-service';

@Component({
  selector: 'app-output-data',
  templateUrl: './out-data.component.html',
  styleUrls: ['./out-data.component.scss'],
})
export class OutDataComponent implements OnInit {
  public error: string;
  public element: DeleteQuesitonModel;
  public questions: any[];

  constructor(private http: QuestionService) {}

  ngOnInit(): void {
    this.http.getQuestion().subscribe(
      (result) => {
        if (result) {
          this.questions = result;
        }
      },
      (error) => {
        this.error = error.title;
      },
    );
  }

  public deleteItem(id: number) {
    this.http.deleteQuestion(id).subscribe((result) => {
      const element = this.questions.find((i) => i.id === result);
      const indexElement = this.questions.indexOf(element);
      this.questions.splice(indexElement, 1);
    });
  }
}
