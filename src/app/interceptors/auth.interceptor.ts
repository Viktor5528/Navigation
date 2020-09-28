import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AccountService } from '../services/account-service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService, private router: Router) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                () => { },
                errHttp => {
                    if (errHttp.status === 401) {
                        this.accountService.deleteToken();
                        this.router.navigate(['signin']);
                    }
                }
            )
        );
    }
}
