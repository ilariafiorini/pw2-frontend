import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgenzieListComponent } from './agenzie-list/agenzie-list.component';
import { PacchettiListComponent } from './pacchetti-list/pacchetti-list.component';
import { AgenziaComponent } from './agenzia/agenzia.component';
import { PacchettoComponent } from './pacchetto/pacchetto.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenzieListComponent,
    PacchettiListComponent,
    AgenziaComponent,
    PacchettoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
