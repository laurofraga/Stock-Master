import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';  // URL da API
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/funcionarios`).pipe(
      map(funcionarios => {
        const matchedFuncionario = funcionarios.find(
          u => u.username === user.username && u.password === user.password
        );

        if (matchedFuncionario) {
          // Gera um token fictício
          const fakeToken = `${matchedFuncionario.username}-fake-jwt-token`;
          return { token: fakeToken };
        } else {
          throw new Error('Credenciais inválidas');
        }
      }),
      catchError(err => throwError(() => 'Erro ao autenticar'))
    );
  }

  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
