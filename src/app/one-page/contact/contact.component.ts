import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faInstagram, faLinkedinIn, faFacebookF, } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faInstagram = faInstagram;
  faLinkedin = faLinkedinIn;
  faFacebookF = faFacebookF;
  faEnvelope = faEnvelope;


  ngOnInit(): void {
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
