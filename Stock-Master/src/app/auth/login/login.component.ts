import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.user).subscribe(
      (response) => {
        // Se o login for bem-sucedido, armazene o token
        this.authService.storeToken(response.token);
        // Redirecione o usuário para a dashboard ou outra rota protegida
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Se o login falhar, exiba uma mensagem de erro
        this.errorMessage = 'Erro ao fazer login. Verifique suas credenciais.';
      }
    );
  }
}

