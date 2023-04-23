import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

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
}
