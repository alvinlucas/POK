import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhyPokComponent } from './why-pok/why-pok.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent } from './projet/projet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhyPokComponent,
    ContactComponent,
    ProjetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
