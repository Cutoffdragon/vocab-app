import { Component, Inject } from '@angular/core';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private authService : AuthenticationService = Inject(AuthenticationService);

  username: string = '';
  password: string = '';

  constructor() {}

  register(): void {
    this.authService.register(this.username, this.password).subscribe({
      next: (data) => {
        console.log('Registration Received', data);
      },
      error: (err) => {
        console.log('Registration Failed', err);
      },
      complete: () => {
        console.log('Registration Complete');
      }
    })
  }
}
