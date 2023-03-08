import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
//     window.scroll({ 
//       top: 0, 
//       left: 0, 
//       behavior: 'smooth' 
      
// });
  }

  // window.onload = () => {
  //   window.addEventListener("scroll", () => {
  //     let hauteur = document.documentElement.scrollHeight - window.innerHeight;
  //     let position = window.scrollY;
  //     let largeur = document.documentElement.clientWidth;

  //     let barre = (position / hauteur) * largeur;

  //     document.getElementById("barre").style.width = barre + "px";
  //   });
  //   };
  

}
