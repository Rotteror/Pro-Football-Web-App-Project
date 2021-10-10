import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-matches-creator',
  templateUrl: './matches-creator.component.html',
  styleUrls: ['./matches-creator.component.css']
})
export class MatchesCreatorComponent implements OnInit {


  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private matchServive: MatchesService) {
    this.form = this.fb.group({
      betsDay: ['', Validators.required],
      hostOne: ['', Validators.required],
      awayOne: ['', Validators.required],
      hostTwo: ['', Validators.required],
      awayTwo: ['', Validators.required],
      hostThree: ['', Validators.required],
      awayThree: ['', Validators.required],
      hostFour: ['', Validators.required],
      awayFour: ['', Validators.required],
      hostFive: ['', Validators.required],
      awayFive: ['', Validators.required],
      hostSix: ['', Validators.required],
      awaySix: ['', Validators.required],
      hostSeven: ['', Validators.required],
      awaySeven: ['', Validators.required],
      hostEight: ['', Validators.required],
      awayEight: ['', Validators.required],
      hostNine: ['', Validators.required],
      awayNine: ['', Validators.required],
      hostTen: ['', Validators.required],
      awayTen: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  createMatchList(): void {
    
    if (this.form.invalid) { return }
    const data = this.form.value;
    this.matchServive.postMatches(data).subscribe({
      next: (result) => {
        this.router.navigate(['/matches'])
      },
      error: (err) => {
        console.error(err.error.message)
      }
    })
  }

}
