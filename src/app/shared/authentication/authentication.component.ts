import { Component } from '@angular/core';
import { AuthenticationRequestModel } from '../../models/authentication-request.model';
import { AuthenticationService } from '../../services/shared/authentication.service';
import { catchError, of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
})
export class AuthenticationComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  loginModel: AuthenticationRequestModel = new AuthenticationRequestModel();

  login() {
    this.authenticationService.login2(this.loginModel).subscribe({
      next: (result) => {
        localStorage.setItem('token', result.token);
        this.router.navigateByUrl('listado-clientes');
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.message,
        });
      },
    });
  }
}
