import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Update the path based on your structure
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'] // Remove if not using CSS
})
export class RegisterComponent {
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(username: string, email: string, password: string): void {
    const userCredentials = { username, email, password };
    this.authService.register(userCredentials).subscribe({
      next: response => {
        this.successMessage = 'Registration successful!';
        this.router.navigate(['/login']); // Navigate to the login page
      },
      error: error => {
        this.errorMessage = 'Registration failed';
      }
    });
  }

}
