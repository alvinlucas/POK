import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from "./error/error.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { OnePageComponent } from "./one-page/one-page.component";

const routes: Routes =[
 {path: 'home', component: OnePageComponent},
 { path: '', component: LandingPageComponent },
 { path: '404', component: ErrorComponent },
 { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

