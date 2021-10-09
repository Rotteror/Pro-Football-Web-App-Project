import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-creator',
  templateUrl: './matches-creator.component.html',
  styleUrls: ['./matches-creator.component.css']
})
export class MatchesCreatorComponent implements OnInit {


  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
     
    })
  }

  ngOnInit(): void {
  }

  createMatchList(): void {
    
  }

}
