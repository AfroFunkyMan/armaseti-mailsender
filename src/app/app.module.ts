import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ImportComponent } from './import/import.component';
import { LetterComponent } from './letter/letter.component';
import { AnswersComponent } from './answers/answers.component';
import { SenderComponent } from './sender/sender.component';

const appRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'import', component: ImportComponent },
  { path: 'letter', component: LetterComponent },
  { path: 'sender', component: SenderComponent },
  { path: 'answers', component: AnswersComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ImportComponent,
    LetterComponent,
    AnswersComponent,
    SenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
