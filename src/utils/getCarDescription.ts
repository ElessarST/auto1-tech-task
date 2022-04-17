import { Car } from '../types/Car';
import { capitalize } from './capitalize';

export function getCarDescription({
  color,
  fuelType,
  mileage: { number, unit },
  stockNumber,
}: Car) {
  const mileage = `${number} ${unit.toUpperCase()}`;
  const colorCapitalized = capitalize(color);
  return `Stock # ${stockNumber} - ${mileage} - ${fuelType} -${colorCapitalized}`;
}
