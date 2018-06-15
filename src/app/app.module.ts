import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyheroesComponent } from './myheroes/myheroes.component';
import { MyheroDetailComponent } from './myhero-detail/myhero-detail.component';
import { MymessagesComponent } from './mymessages/mymessages.component';

@NgModule({
  declarations: [
    AppComponent,
    MyheroesComponent,
    MyheroDetailComponent,
    MymessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
