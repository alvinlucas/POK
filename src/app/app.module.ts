import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { OnePageComponent } from './one-page/one-page.component';
import { ContactComponent } from './one-page/contact/contact.component';
import { ContactezNousComponent } from './one-page/contactez-nous/contactez-nous.component';
import { FooterComponent } from './one-page/footer/footer.component';
import { HomeComponent } from './one-page/home/home.component';
import { ProjetComponent } from './one-page/projet/projet.component';
import { Projet2Component } from './one-page/projet2/projet2.component';
import { Projet3Component } from './one-page/projet3/projet3.component';
import { TeamComponent } from './one-page/team/team.component';
import { VideoComponent } from './one-page/video/video.component';
import { WhyPokComponent } from './one-page/why-pok/why-pok.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    OnePageComponent,
    HomeComponent,
    ContactComponent,
    ProjetComponent,
    Projet2Component,
    Projet3Component,
    FooterComponent,
    WhyPokComponent,
    TeamComponent,
    ContactezNousComponent,
    VideoComponent,
    LandingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
