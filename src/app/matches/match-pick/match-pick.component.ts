import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatchesService } from '../matches.service';
import { map } from 'rxjs/operators'
import { faFutbol, faTimesCircle } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-match-pick',
  templateUrl: './match-pick.component.html',
  styleUrls: ['./match-pick.component.css'],
})

export class MatchPickComponent implements OnInit {

  currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  matchList: any | undefined;
  toggle: boolean = false;
  predictions: { [key: string]: string } = {};

  icons = {
    faFutbol,
    faTimesCircle
  }

  get betsCount() {
    return Object.keys(this.predictions).length
  }

  // Try Approach with ngFor key|value pair
  // dataSource = new BehaviorSubject(this.predictions);
  // myBets = this.dataSource.asObservable();


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
    const parentDiv = element.parentNode?.children; 
    if(parentDiv){
      Array.from(parentDiv).forEach(e => e.removeAttribute('id'));
    }
    
    element.setAttribute('id', 'active');
    this.predictions[match] = prediction
  }

  toggleClick(): void {
    // const el = document.getElementById('content');
    // el?.setAttribute('class', 'appear');
    this.toggle = !this.toggle
  }

  removeSelection(matchName: string) {
    return delete this.predictions[matchName];
  }

  postPredictionHandler(){
    if((Object.keys(this.predictions).length < 10)){
      console.log('You need to predict all 10 matches!')
      return;
    }
    console.log(this.predictions)
  }

}
