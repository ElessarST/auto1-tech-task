import axios from 'axios';
import { API_BASE_URL } from '../consts/api';
import {
  GetCarResponse,
  GetCarsResponse,
  GetColorsResponse,
  GetManufacturersResponse,
} from './types';
import { Car } from '../types/Car';
import { CarColor } from '../types/CarColor';
import { Manufacturer } from '../types/Manufacturer';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
});

export function getCars(): Promise<GetCarsResponse> {
  return instance.get('/cars').then((res) => res.data);
}

export function getCar(stockNumber: number): Promise<Car | undefined> {
  return instance
    .get<GetCarResponse>(`/cars/${stockNumber}`)
    .then((res) => res.data?.car);
}

export function getColors(): Promise<CarColor[]> {
  return instance
    .get<GetColorsResponse>(`/colors`)
    .then((res) => res.data?.colors || []);
}

export function getManufacturers(): Promise<Manufacturer[]> {
  return instance
    .get<GetManufacturersResponse>(`/manufacturers`)
    .then((res) => res.data?.manufacturers || []);
}
