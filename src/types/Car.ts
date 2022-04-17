export enum FuelType {
  Petrol = 'Petrol',
  Diesel = 'Diesel',
}

export enum Unit {
  Km = 'km',
  Mi = 'mi',
}

export type Mileage = {
  number: number;
  unit: Unit;
};

export type Car = {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: Mileage;
  fuelType: FuelType;
  pictureUrl: string;
};
