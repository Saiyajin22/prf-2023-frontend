import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

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
  buttonLabel: string = "Create";
  title: string = "Create car";

  constructor(
    private readonly route: ActivatedRoute,
    private readonly carService: CarService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.car = params as Car;
      if (this.car.brand) {
        this.title = "Details of car";
        this.buttonLabel = 'Update';
        this.brand = this.car.brand;
        this.series = this.car.series;
        this.bodyStyle = this.car.bodyStyle;
        this.dateOfManufacturing = this.car.dateOfManufacturing
          .toString()
          .substring(0, 10);
      }
    });
  }

  updateOrCreateCar(): void {
    if (this.car?.brand) {
    } else {
      if (this.isFormValid()) {
        this.carService
          .createCar(
            this.brand!,
            this.series!,
            this.bodyStyle!,
            new Date(this.dateOfManufacturing!)
          )
          .subscribe((result) => {
            if (result.httpStatusNumber === 201) {
              this.clearForm();
            }
          });
      }
    }
  }

  isFormValid(): boolean {
    if ((this.brand, this.series, this.bodyStyle, this.dateOfManufacturing)) {
      return true;
    }

    return false;
  }

  clearForm(): void {
    this.brand = undefined;
    this.series = undefined;
    this.bodyStyle = undefined;
    this.dateOfManufacturing = undefined;
  }
}
