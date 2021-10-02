import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  icons = {
    faFacebook,
    faTwitter,
    faInstagram,
    faGoogle,
    faYoutube,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
