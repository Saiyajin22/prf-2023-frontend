import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe((result) => {
      console.log('RESULT: ', result);
      if (result.toLowerCase().includes('successful')) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = result;
      }
    });
  }
}
