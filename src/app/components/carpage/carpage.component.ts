import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carpage',
  templateUrl: './carpage.component.html',
  styleUrls: ['./carpage.component.scss']
})
export class CarpageComponent implements OnInit {
  cars: MatTableDataSource<Car> = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'brand', 'series', 'bodyStyle', 'dateOfManufacturing'];

  constructor(private readonly carService: CarService) { }

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getCars().subscribe((result) => {
      this.cars = new MatTableDataSource(result);
    });
  }

}
