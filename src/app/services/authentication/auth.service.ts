import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) {}

  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<boolean>(environment.baseUrl + '/users/authenticated', {
      headers: this.headers,
    });
  }
}
