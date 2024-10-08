import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<User> {
    //implementar chamada ao backend

    return this.http.post<any>('http://localhost:3000/auth', {email, password});
  }
}
