import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AgenzieListComponent } from './agenzie-list/agenzie-list.component';
import { PacchettiListComponent } from './pacchetti-list/pacchetti-list.component';
import { AgenziaComponent } from './agenzia/agenzia.component';
import { PacchettoComponent } from './pacchetto/pacchetto.component';
import { AgenziaDettaglioComponent } from './agenzia-dettaglio/agenzia-dettaglio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  { path: '', component: AgenzieListComponent },
  { path: 'agenzie', component: AgenzieListComponent },
  { path: 'agenzie/:id', component: AgenziaDettaglioComponent },
  { path: 'pacchetti/:id', component: PacchettiListComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
 ];
@NgModule({
  declarations: [
    AppComponent,
    AgenzieListComponent,
    PacchettiListComponent,
    AgenziaComponent,
    PacchettoComponent,
    AgenziaDettaglioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
