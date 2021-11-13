import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { HowItWorksComponent } from './core/how-it-works/how-it-works.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'how',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 60],

    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
