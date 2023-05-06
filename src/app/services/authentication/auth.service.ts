import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { BackendResponse } from 'src/app/models/httpResponse';
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
        withCredentials: true,
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
    return this.httpClient
      .post<string>(
        environment.baseUrl + '/users/login',
        {
          username: username,
          password: password,
        },
        {
          headers: this.headers,
          responseType: 'json',
          withCredentials: true,
        }
      )
      .pipe(
        catchError((error) => {
          if (error.status === 400) {
            return of(error.errorMessage);
          }
          throw error;
        })
      );
  }

  register(username?: string, password?: string, birthdate?: Date): Observable<string> {
    return this.httpClient
      .post<string>(
        environment.baseUrl + '/users/register',
        {
          username: username,
          password: password,
          birthdate: birthdate
        },
        {
          headers: this.headers,
          responseType: 'json',
          withCredentials: true,
        }
      )
      .pipe(
        catchError((error) => {
          if (error.status === 400) {
            return of(error.errorMessage);
          }
          throw error;
        })
      );
  }

  logout(): Observable<BackendResponse> {
    return this.httpClient
      .post<BackendResponse>(
        environment.baseUrl + '/users/logout',
        {},
        {
          headers: this.headers,
          responseType: 'json',
          withCredentials: true,
        }
      );
  }
}
