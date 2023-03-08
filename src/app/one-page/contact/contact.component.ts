import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  nom: string;
  email: string;
  message: string;

  constructor() { 
    this.nom = '';
    this.email = '';
    this.message = '';
  }

  ngOnInit(): void {
  }
  envoyer() {
    window.location.href = "mailto:alvin44.lucas@gmail.com?subject="  + "&body=" + this.message;
  }

  scrollToSectionReal() {
    setTimeout(() => {
    const element = document.getElementById("real");
    if (element) {
    element.scrollIntoView( {behavior: "smooth", block: "start", inline: "nearest"});
  }
}, 100);
  }

  scrollToSectionTeam() {
    setTimeout(() => {
    const element = document.getElementById("team");
    if (element) {
    element.scrollIntoView( {behavior: "smooth", block: "start", inline: "nearest"});
  }
}, 100);
  }


}
