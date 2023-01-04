import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('myDiv') myDiv: any
  ngOnInit(): void {
    this.myDiv.nativeElement.scrollTop = this.myDiv.nativeElement.scrollWidth 
  }

  title = 'POK';

  public loading: boolean = false;

}
