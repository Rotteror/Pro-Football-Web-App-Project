import { Component, OnInit } from '@angular/core';
import { faFutbol, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  user: IUser | undefined;
  
  icons = {
    faFutbol
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserHistory();
  }

  loadUserHistory(): void {
    const userId = localStorage.getItem('_id');
    if (!userId) { return }
    this.userService.getUserById(userId).subscribe(u => this.user = u);
    
  }

}
