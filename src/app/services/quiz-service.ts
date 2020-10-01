import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateQuestionModel, UpdateQuestionModel } from './interfaces/QuestionModel';
import { CreateQuizModel } from './interfaces/QuizModels';

import { URLs } from './URL';

@Injectable()
export class QuizService{


    url = URLs.quizURL;
    constructor(private http: HttpClient) { }

    public getQuiz(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }
    public createQuiz(model: CreateQuizModel): Observable<any> {
        return this.http.post(this.url, model);
    }
    public updateQuiz(model: UpdateQuestionModel): Observable<any> {
        return this.http.put(this.url, model);
    }
    public deleteQuiz(id: number): Observable<any> {
        return this.http.delete(`${this.url}?id=${id}`);
    }
}
