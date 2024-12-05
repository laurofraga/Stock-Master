import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { User } from '../models/user.model';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // URL da API para autenticação
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  // Função para login
  login(user: User): Observable<any> {
    // Faz uma requisição para buscar o usuário correspondente
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map(users => {
        const matchedUser = users.find(
          u => u.username === user.username && u.password === user.password
        );

        if (matchedUser) {
          // Retorna um token fictício
          return { token: 'fake-jwt-token' };
        } else {
          throw new Error('Credenciais inválidas');
        }
      }),
      catchError(err => throwError(() => 'Erro ao autenticar'))
    );
  }
  // Recuperar o token do LocalStorage
  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  
  isAuthenticated(): boolean {
    return !!this.getToken(); // Retorna true se o token existir
  }
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
