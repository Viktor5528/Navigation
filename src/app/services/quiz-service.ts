import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateQuizModel, UpdateQuizModel } from './interfaces/QuizModels';

import { URLs } from './URL';

@Injectable()
export class QuizService {
  url = URLs.quizURL;

  constructor(private http: HttpClient) {}

  public getQuizzes(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  public createQuiz(model: CreateQuizModel): Observable<any> {
    return this.http.post(this.url, model);
  }
  public updateQuiz(model: UpdateQuizModel): Observable<any> {
    return this.http.put(this.url, model);
  }
  public deleteQuiz(id: number): Observable<any> {
    return this.http.delete(`${this.url}?id=${id}`);
  }
  public getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/getbyid?id=${id}`);
  }

}
