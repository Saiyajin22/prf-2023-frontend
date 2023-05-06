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

  createCar(brand: string, series: string, bodyStyle: string, dateOfManufacturing: Date): Observable<BackendResponse> {
    return this.httpClient.post<BackendResponse>(
      environment.baseUrl + '/cars/create',
      {
        brand: brand,
        series: series,
        bodyStyle: bodyStyle,
        dateOfManufacturing: dateOfManufacturing
      },
      {
        headers: this.headers,
        responseType: 'json',
        withCredentials: true,
      }
    );
  }

  updateCar(id: string, brand: string, series: string, bodyStyle: string, dateOfManufacturing: Date): Observable<BackendResponse> {
    return this.httpClient.patch<BackendResponse>(
      environment.baseUrl + '/cars/update/' + id,
      {
        brand: brand,
        series: series,
        bodyStyle: bodyStyle,
        dateOfManufacturing: dateOfManufacturing
      },
      {
        headers: this.headers,
        responseType: 'json',
        withCredentials: true,
      }
    );
  }
}
