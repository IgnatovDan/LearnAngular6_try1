import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyheroesComponent } from './myheroes/myheroes.component';
import { MyheroDetailComponent } from './myhero-detail/myhero-detail.component';
import { MymessagesComponent } from './mymessages/mymessages.component';
import { AppRoutingModule } from './/app-routing.module';
import { MydashboardComponent } from './mydashboard/mydashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MyheroesComponent,
    MyheroDetailComponent,
    MymessagesComponent,
    MydashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
