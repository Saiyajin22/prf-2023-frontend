import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { BackendResponse } from '../models/httpResponse';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private options = {
    headers: this.headers,
    responseType: 'json',
    withCredentials: true,
  };

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(environment.baseUrl + '/cars', {
      headers: this.headers,
    });
  }

  getCarById(id: string): Observable<Car> {
    return this.httpClient.post<Car>(environment.baseUrl + '/cars/' + id, {
      headers: this.headers,
    });
  }

  deleteCarById(id: string): Observable<BackendResponse> {
    return this.httpClient.delete<BackendResponse>(
      environment.baseUrl + '/cars/' + id,
      {
        headers: this.headers,
        responseType: 'json',
        withCredentials: true,
      }
    );
  }
}
