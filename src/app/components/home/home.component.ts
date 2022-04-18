import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiservice: UserAuthService) { }
  loggedIn = false;

  ngOnInit(): void {
    this.loggedIn = this.apiservice.isLoggedIn();
  }

}
