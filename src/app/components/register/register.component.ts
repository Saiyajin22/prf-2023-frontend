import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private readonly authService: AuthService,
    private readonly router: Router) { }

  username?: string;
  password?: string;
  repeatPassword?: string;
  birthdate?: Date;
  errorMessage?: string;

  ngOnInit(): void {
  }

  register() {
    if(this.username && this.password && this.repeatPassword && this.birthdate){
      if(this.password.length < 8){
        this.errorMessage = "Your password must be at least 8 characters!";
        return;
      }
      if(this.password !== this.repeatPassword){
        this.errorMessage = "Your password and password repeat fields does not match!";
        return;
      }

      this.authService.register(this.username, this.password, this.birthdate).subscribe((result) => {
        console.log('RESULT: ', result);
      });
    } else {
      this.errorMessage = "Please fill all fields!";
    }

    return;
  }

}
