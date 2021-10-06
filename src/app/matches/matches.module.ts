import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookieCardsComponent } from './bookie-cards/bookie-cards.component';
import { MatchPickComponent } from './match-pick/match-pick.component';



@NgModule({
  declarations: [
    BookieCardsComponent,
    MatchPickComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookieCardsComponent,
    MatchPickComponent
  ]
})
export class MatchesModule { }
