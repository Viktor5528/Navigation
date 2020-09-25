import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URLs } from "./URL";
import { UpdateAnswerModel, CreateAnswerModel, DeleteAnswerModel } from "./interfaces/AnswerModels";
import { Observable } from 'rxjs';

@Injectable()
export class AnswerService {
    constructor(private http: HttpClient) { }

    public getAnswers(): Observable<any> {
        return this.http.get(URLs.answerURL);
    }
    public createAnswer(body: CreateAnswerModel): Observable<any> {
        return this.http.post(URLs.answerURL, body);
    }
    public updateAnswer(body: UpdateAnswerModel): Observable<any> {
        return this.http.put(URLs.answerURL, body);
    }
    public deleteAnswer(body: DeleteAnswerModel): Observable<any> {
        return this.http.delete(`${URLs.answerURL}/${body.id}`);
    }
}