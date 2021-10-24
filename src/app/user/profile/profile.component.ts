import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: IUser | undefined

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const id = localStorage.getItem('_id')
    if (!id) { return }
    this.user = undefined;
    this.userService.getUserById(id).subscribe(u => this.user = u)
  }

}
