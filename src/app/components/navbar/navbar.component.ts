import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendResponse } from 'src/app/models/httpResponse';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser?: User;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((result) => {
      this.currentUser = result.data as User;
      console.log("curr", this.currentUser);
    });
  }

  logout(): void {
    this.authService.logout().subscribe((result: BackendResponse) => {
      if (result) {
        if (result.httpStatusNumber === 200) {
          this.router.navigate(['/login']);
        }
      }
    });
  }
}
