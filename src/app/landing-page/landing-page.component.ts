import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  constructor(private router: Router) { setTimeout(() => {
    this.router.navigateByUrl('/home');
  }, 1200); // Redirect after 3 seconds
}

  ngOnInit(): void {
  }

}
