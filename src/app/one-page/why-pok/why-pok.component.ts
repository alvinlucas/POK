import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-pok',
  templateUrl: './why-pok.component.html',
  styleUrls: ['./why-pok.component.scss']
})
export class WhyPokComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToSectionCtc() {
    setTimeout(() => {
    const element = document.getElementById("ctc");
    if (element) {
    element.scrollIntoView( {behavior: "smooth", block: "start", inline: "nearest"});
  }
}, 100);
  }
  
}
