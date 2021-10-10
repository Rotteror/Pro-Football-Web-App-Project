import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { IMatchList } from 'src/app/shared/interfaces/matchList';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-match-pick',
  templateUrl: './match-pick.component.html',
  styleUrls: ['./match-pick.component.css']
})

export class MatchPickComponent implements OnInit {

  currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  matchList: IMatchList | undefined;

  constructor(private matchService: MatchesService) { }

  ngOnInit(): void {
    this.fetchMatches(this.currentDate);
    setTimeout(()=>{
      console.log(this.matchList)

    },2000)
  }

  fetchMatches(currentDate: string): void {
    this.matchList = undefined;
    this.matchService.getMatchList(currentDate).subscribe(matches => this.matchList = matches);
  }



}
