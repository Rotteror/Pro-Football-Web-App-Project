import { Component, OnInit } from '@angular/core';
import { faFutbol, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  user: IUser | undefined;
  prediction: any;

  isMenuOpen: boolean = false;

  icons = {
    faFutbol,
    faSlidersH
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserHistory();
  }


  loadUserHistory(): void {
    const userId = localStorage.getItem('_id');
    if (!userId) { return }
    this.userService.getUserById(userId)
      .pipe(tap(m => this.prediction = m.betPredictions))
      .subscribe(u => this.user = u);

  }

  toggleHandler(e: Event, index:any) {
    const element = e.target as HTMLElement
    console.log(index)
    console.log(element)
   

  }

}
