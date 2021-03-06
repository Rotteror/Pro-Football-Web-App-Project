import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { FeatureLogosComponent } from './feature-logos/feature-logos.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { StandingComponent } from './standing/standing.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthActivate } from './guards/auth.activate';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FeatureLogosComponent,
    FooterComponent,
    HowItWorksComponent,
    StandingComponent,
    NewsletterComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FeatureLogosComponent,
    HowItWorksComponent,
    HomeComponent
  ],
  providers: [
    AuthActivate
  ]
})
export class CoreModule { }
