import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; // URL da API para autenticação
  private authTokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  // Função para login
  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, user);
  }

  // Armazenar o token no LocalStorage
  storeToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  // Recuperar o token do LocalStorage
  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  // Verificar se o usuário está autenticado
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  // Logout - remover o token
  logout(): void {
    localStorage.removeItem(this.authTokenKey);
  }
}
