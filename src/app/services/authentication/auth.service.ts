import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) {}

  isAuthenticated(): Observable<boolean> {
    return this.httpClient
      .get<boolean>(environment.baseUrl + '/users/authenticated', {
        headers: this.headers,
        responseType: 'json',
      })
      .pipe(
        catchError((error) => {
          if (error.status === 403) {
            return of(false);
          }
          throw error;
        })
      );
  }

  login(username?: string, password?: string): Observable<string> {
    return this.httpClient.post<string>(
      environment.baseUrl + '/users/login',
      {
        username: username,
        password: password,
      },
      {
        headers: this.headers,
      }
    );
  }
}
