import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faInstagram, faLinkedinIn, faFacebookF, } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.component.html',
  styleUrls: ['./contactez-nous.component.scss']
})

export class ContactezNousComponent implements OnInit {
  faInstagram = faInstagram;
  faLinkedin = faLinkedinIn;
  faFacebookF = faFacebookF;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
