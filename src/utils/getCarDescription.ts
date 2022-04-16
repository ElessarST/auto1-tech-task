import { Car } from '../types/Car';
import { capitalize } from './capitalize';

export function getCarDescription(car: Car) {
  return `Stock # ${car.stockNumber} - ${
    car.mileage.number
  } ${car.mileage.unit.toUpperCase()} - ${car.fuelType} -${capitalize(
    car.color,
  )}`;
}
