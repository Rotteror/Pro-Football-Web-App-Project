import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  icons = {
    faChevronDown,
    faFacebook,
    faTwitter,
    faInstagram,
    faGoogle,
    faYoutube,
  }

  ngOnInit(): void {
  }

}
