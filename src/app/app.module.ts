import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


import { DataService } from './data.service';
import { AnswerService } from './services/answer-service';
import { AccountService } from './services/account-service';
import { QuestionService } from './services/question-service';
import { QuizService } from './services/quiz-service';

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { BtnLeftComponent } from './bnt-left/bnt-left.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SnackComponent } from './snack/snack.component';
import { BodyComponent } from './body/body.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { UpdateQuizFormComponent } from './quiz-form/update-quiz-form/update-quiz-form.component';
import { ReadyQuizzesComponent } from './quiz-form/ready-quizzes/ready-quizzes.component';
import { OutDataComponent } from './question-form/out-data/out-data.component';



const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'output', component: OutDataComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'question', component: QuestionFormComponent },
  { path: 'quiz', component: QuizFormComponent },
  { path: 'getquiz', component: ReadyQuizzesComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [
    AppComponent,
    BtnLeftComponent,
    HeaderComponent,
    BodyComponent,
    OutDataComponent,
    WelcomeComponent,
    SnackComponent,
    SignInComponent,
    SignUpComponent,
    QuestionFormComponent,
    QuizFormComponent,
    QuizFormComponent,
    UpdateQuizFormComponent,
    ReadyQuizzesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    DataService,
    SnackComponent,
    HttpClient,
    QuestionService,
    QuizService,
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
export class AppModule { }
