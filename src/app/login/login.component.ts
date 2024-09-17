import { Component, Inject } from '@angular/core';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService : AuthenticationService = Inject(AuthenticationService);

  username: string = '';
  password: string = '';

  constructor() {}

  login(): void {
    this.authService.register(this.username, this.password).subscribe({
      next: (data) => {
        console.log('Login data Received', data);
      },
      error: (err) => {
        console.log('Login Failed', err);
      },
      complete: () => {
        console.log('Login Complete');
      }
    })
  }

}
