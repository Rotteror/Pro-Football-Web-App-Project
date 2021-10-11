import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { IMatchList } from 'src/app/shared/interfaces/matchList';
import { MatchesService } from '../matches.service';
import { map,tap } from 'rxjs/operators'

@Component({
  selector: 'app-match-pick',
  templateUrl: './match-pick.component.html',
  styleUrls: ['./match-pick.component.css']
})

export class MatchPickComponent implements OnInit {

  currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  matchList: any | undefined;
  

  constructor(private matchService: MatchesService) { }

  ngOnInit(): void {
    this.fetchMatches(this.currentDate);
    setTimeout(() => { 
      console.log(this.matchList)
    }, 2000)
  }

  fetchMatches(currentDate: string): void {
    this.matchList = undefined;
    this.matchService.getMatchList(currentDate).pipe(map(m => { return Object.keys(m.matches) })).subscribe(m => this.matchList = m);
    // this.matchService.getMatchList(currentDate).pipe(map(m => { return m[0] })).subscribe(m => this.matchList = m);
    //  this.matchService.getMatchList(currentDate).subscribe(m => this.matchList = m.matches);
  }



}
