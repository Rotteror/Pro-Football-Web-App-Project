import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { MatchesService } from '../matches.service';
import { map, tap } from 'rxjs/operators'


@Component({
  selector: 'app-match-pick',
  templateUrl: './match-pick.component.html',
  styleUrls: ['./match-pick.component.css'],
})

export class MatchPickComponent implements OnInit {

  currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  matchList: any | undefined;
  isClicked: boolean = false;
  predictions: { [key: string]: string } = {};


  constructor(private matchService: MatchesService) {

  }

  ngOnInit(): void {
    this.fetchMatches(this.currentDate);

  }

  fetchMatches(currentDate: string): void {
    this.matchList = undefined;
    this.matchService.getMatchList(currentDate)
      .pipe(map(m => { return Object.keys(m.matches) }))
      .subscribe(m => this.matchList = m);
  }


  clickHandler(e: Event, match: string): void {
    const element = e.target as HTMLElement;
    const prediction = '' + element.textContent;
    this.predictions[match] = prediction
    console.log(prediction)
    console.log(match)
    console.log(this.predictions)
  }


}
