import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faInstagram, faLinkedinIn, faFacebookF, } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faInstagram = faInstagram;
  faLinkedin = faLinkedinIn;
  faFacebookF = faFacebookF;
  faEnvelope = faEnvelope;
  
  constructor() { }

  ngOnInit(): void {
 
  }
  isMenuOpen = false;

  scrollToSectionDecouvrir() {
    setTimeout(() => {
    const element = document.getElementById("discover");
    if (element) {
    element.scrollIntoView( {behavior: "smooth", block: "start", inline: "nearest"});
  }
}, 100);
  }

  scrollToSectionCtc() {
    setTimeout(() => {
    const element = document.getElementById("ctc");
    if (element) {
    element.scrollIntoView( {behavior: "smooth", block: "start", inline: "nearest"});
  }
}, 100);
  }
  
  scrollToSectionReal() {
    setTimeout(() => {
    const element = document.getElementById("real");
    if (element) {
    element.scrollIntoView( {behavior: "smooth", block: "start", inline: "nearest"});
  }
}, 100);
  }

}

