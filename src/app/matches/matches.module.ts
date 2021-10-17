import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookieCardsComponent } from './bookie-cards/bookie-cards.component';
import { MatchPickComponent } from './match-pick/match-pick.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesCreatorComponent } from './matches-creator/matches-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchesService } from './matches.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    BookieCardsComponent,
    MatchPickComponent,
    MatchListComponent,
    MatchesCreatorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatchesRoutingModule,
  ],
  exports: [
    BookieCardsComponent,
    MatchPickComponent,
    MatchListComponent,
    MatchesCreatorComponent
  ],
  providers:[
    MatchesService
  ]
})
export class MatchesModule { }
