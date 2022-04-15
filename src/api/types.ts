import { Car } from '../types/Car';
import { CarColor } from '../types/CarColor';
import { Manufacturer } from '../types/Manufacturer';

export type GetCarsResponse = {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
};

export type GetCarResponse = {
  car: Car;
};

export type GetColorsResponse = {
  colors: CarColor[];
};

export type GetManufacturersResponse = {
  manufacturers: Manufacturer[];
};
