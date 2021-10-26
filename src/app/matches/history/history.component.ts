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
  isOpen: boolean = false;
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

  toggleHandler(index: any) {

    //TO DO FIND BETTER WAY TO DO THIS COLLAPSE LIST

    this.isOpen = !this.isOpen;
    const ul = document.getElementById(index)?.querySelectorAll('li');
    if (this.isOpen) {
      if (ul) {
        Array.from(ul).forEach(e => e.setAttribute("class", 'li-match'));
      }
    } else {
      if (ul) {
        Array.from(ul).forEach(e => e.setAttribute("class", 'li-match active'));
      }
    }
  }

}
