import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateQuestionModel, DeleteQuesitonModel, UpdateQuestionModel } from './interfaces/QuestionModel';
import { URLs } from './URL';

@Injectable()
export class QuestionService {
    url = URLs.questionURL;
    constructor(private http: HttpClient) { }

    public getQuestion(): Observable<any> {
        return this.http.get(this.url);
    }
    public createQuestion(model: CreateQuestionModel): Observable<any> {
        return this.http.post(this.url, model);
    }
    public updateQuestion(model: UpdateQuestionModel): Observable<any> {
        return this.http.put(this.url, model);
    }
    public deleteQuestion(model: DeleteQuesitonModel): Observable<any> {
        return this.http.delete(`${this.url}/${model.id}`);
    }
}
