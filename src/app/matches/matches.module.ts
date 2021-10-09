import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookieCardsComponent } from './bookie-cards/bookie-cards.component';
import { MatchPickComponent } from './match-pick/match-pick.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesCreatorComponent } from './matches-creator/matches-creator.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookieCardsComponent,
    MatchPickComponent,
    MatchListComponent,
    MatchesCreatorComponent
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    BookieCardsComponent,
    MatchPickComponent,
    MatchListComponent,
    MatchesCreatorComponent
  ]
})
export class MatchesModule { }
