import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.css']
})
export class SharedHeaderComponent implements OnInit {


  userId: string | null | undefined

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("_id");
  }



}
