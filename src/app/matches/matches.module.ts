import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookieCardsComponent } from './bookie-cards/bookie-cards.component';
import { MatchPickComponent } from './match-pick/match-pick.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchesRoutingModule } from './matches-routing.module';



@NgModule({
  declarations: [
    BookieCardsComponent,
    MatchPickComponent,
    MatchListComponent
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule
  ],
  exports: [
    BookieCardsComponent,
    MatchPickComponent,
    MatchListComponent
  ]
})
export class MatchesModule { }
