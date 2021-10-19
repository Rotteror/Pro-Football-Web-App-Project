import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  icons = {
    faChevronDown,
    faFacebook,
    faTwitter,
    faInstagram,
    faGoogle,
    faYoutube,
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  logoutHandler(): void {
    this.userService.logout().subscribe({
      next: () => {
        localStorage.removeItem('_id');
        this.router.navigate(['/']);
      },
      error: (err) => {
        //console.log(err.error.message);
      }
    })
  }
}
