import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email: string;
  subject: string;
  message: string;

  constructor() { 
    this.email = '';
    this.subject = '';
    this.message = '';
  }

  ngOnInit(): void {
  }
  envoyer() {
    window.location.href = "mailto:pokagence@gmail.com?subject=" + this.subject  + "&body=" + this.message;
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
