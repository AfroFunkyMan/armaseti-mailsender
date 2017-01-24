import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppSocketService } from './app-socket.service';

import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignPipe } from './campaign/campaign.pipe';
import { ListsComponent } from './lists/lists.component';

const appRoutes: Routes = [
  { path: '', component: ListsComponent },
  { path: 'lists', component: CampaignComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    CampaignPipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
