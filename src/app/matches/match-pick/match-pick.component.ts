import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-match-pick',
  templateUrl: './match-pick.component.html',
  styleUrls: ['./match-pick.component.css']
})
export class MatchPickComponent implements OnInit {

  currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  constructor() { }

  ngOnInit(): void {
    console.log(this.currentDate)
  }

}
