import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DataService } from './data.service';
import { AnswerService } from './services/answer-service';
import { AccountService } from './services/account-service';

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { BtnLeftComponent } from './bnt-left/bnt-left.component';
import { HeaderComponent } from './header/header.component';
import { InpDataComponent } from './inp-data/inp-data.component';
import { OutDataComponent } from './out-data/out-data.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SnackComponent } from './snack/snack.component';
import { BodyComponent } from './body/body.component';
import { TokenInterceptor } from './interceptors/token.interceptor';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'input', component: InpDataComponent },
  { path: 'output', component: OutDataComponent },
  { path: 'signin', component: SignInComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [
    AppComponent,
    BtnLeftComponent,
    HeaderComponent,
    BodyComponent,
    InpDataComponent,
    OutDataComponent,
    WelcomeComponent,
    SnackComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [
    DataService,
    SnackComponent,
    HttpClient,
    AnswerService,
    AccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
