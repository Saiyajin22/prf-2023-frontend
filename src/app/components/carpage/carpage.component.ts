import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carpage',
  templateUrl: './carpage.component.html',
  styleUrls: ['./carpage.component.scss'],
})
export class CarpageComponent implements OnInit {
  cars: MatTableDataSource<Car> = new MatTableDataSource();

  displayedColumns: string[] = [
    'id',
    'brand',
    'series',
    'bodyStyle',
    'dateOfManufacturing',
    'deleteButton',
    'detailsButton',
  ];

  constructor(
    private readonly carService: CarService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getCars().subscribe((result) => {
      this.cars = new MatTableDataSource(result);
    });
  }

  deleteCar(id: string): void {
    this.carService.deleteCarById(id).subscribe((result) => {
      if (result.httpStatusNumber === 200) {
        this.fetchCars();
      }
    });
  }

  goToDetails(car: Car): void {
    this.router.navigate(['/car-details', car]);
  }
}
