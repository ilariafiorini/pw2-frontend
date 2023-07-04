import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    BrowserModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
