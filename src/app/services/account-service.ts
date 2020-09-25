import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLs } from './URL';
import { SignINModel, SignUPModel } from './interfaces/AccountModels';
import { Observable } from 'rxjs';


@Injectable()
export class AccountService {
    constructor(private http: HttpClient) { }

    public SignUP(body: SignUPModel): Observable<any> {
        return this.http.post(URLs.SignUpURL, body);
    }
    public SignIN(body: SignINModel): Observable<any> {
        return this.http.post(URLs.SignInURL, body);
    }
}
