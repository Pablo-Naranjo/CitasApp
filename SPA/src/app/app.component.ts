import { Component, OnInit } from '@angular/core';
import { IUser } from './_models/iuser';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CitasApp';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(): void {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: IUser = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
