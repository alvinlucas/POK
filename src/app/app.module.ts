import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhyPokComponent } from './why-pok/why-pok.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent } from './projet/projet.component';
import { Projet2Component } from './projet2/projet2.component';
import { Projet3Component } from './projet3/projet3.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { ContactezNousComponent } from './contactez-nous/contactez-nous.component';
import { ChargementComponent } from './chargement/chargement.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhyPokComponent,
    ContactComponent,
    ProjetComponent,
    Projet2Component,
    Projet3Component,
    FooterComponent,
    TeamComponent,
    ContactezNousComponent,
    ChargementComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
