import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faTwitter, faInstagram, faLinkedin, faYoutube, faTumblr } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.component.html',
  styleUrls: ['./contactez-nous.component.scss']
})

export class ContactezNousComponent implements OnInit {
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faTumblr = faTumblr;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
