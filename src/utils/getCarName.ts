import { Car } from '../types/Car';

export function getCarName(car: Car) {
  return `${car.manufacturerName} ${car.modelName}`;
}
