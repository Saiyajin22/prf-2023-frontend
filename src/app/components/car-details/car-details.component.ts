import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  car?: Car;
  brand?: string;
  series?: string;
  bodyStyle?: string;
  dateOfManufacturing?: string;
  errorMessage?: string;

  constructor(
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.car = params as Car;
      if (this.car) {
        this.brand = this.car.brand;
        this.series = this.car.series;
        this.bodyStyle = this.car.bodyStyle;
        this.dateOfManufacturing = this.car.dateOfManufacturing.toString().substring(0, 10);
      }
    });
  }

  updateOrCreateCar(): void {}
}
