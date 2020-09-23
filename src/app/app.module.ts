import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BntLeftComponent } from './bnt-left/bnt-left.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { InpDataComponent } from './inp-data/inp-data.component';
import { OutDataComponent } from './out-data/out-data.component';
import { WelcomeComponent } from './welcome/welcome.component';



const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'input', component: InpDataComponent },
  { path: 'output', component: OutDataComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [
    AppComponent,
    BntLeftComponent,
    HeaderComponent,
    BodyComponent,
    InpDataComponent,
    OutDataComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}