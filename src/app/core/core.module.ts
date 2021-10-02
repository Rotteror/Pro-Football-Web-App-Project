import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { FeatureLogosComponent } from './feature-logos/feature-logos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FeatureLogosComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FeatureLogosComponent,
    HomeComponent
  ]
})
export class CoreModule { }
