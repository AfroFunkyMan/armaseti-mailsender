import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ImportComponent } from './import/import.component';

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'import', component: ImportComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ImportComponent
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
