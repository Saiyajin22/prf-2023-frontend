import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { BackendResponse } from '../models/httpResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private options = {
    headers: this.headers,
    responseType: 'json',
    withCredentials: true,
  };

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<BackendResponse> {
    return this.httpClient.get<BackendResponse>(
      environment.baseUrl + '/users',
      {
        headers: this.headers,
        responseType: 'json',
        withCredentials: true,
      }
    );
  }
}
