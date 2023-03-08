import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
