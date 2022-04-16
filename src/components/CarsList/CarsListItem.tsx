import React from 'react';
import { CardMedia, Typography } from '@mui/material';
import InlineLink from '../InlineLink';
import { Car } from '../../types/Car';
import CarsListItemLayout from './CarsListItemLayout';
import { capitalize } from '../../utils/capitalize';

type Props = {
  car: Car;
};

const CarsListItem: React.FC<Props> = ({ car }) => (
  <CarsListItemLayout
    img={
      <CardMedia
        component="img"
        image={car.pictureUrl}
        alt="Live from space album cover"
      />
    }
    title={
      <Typography variant="h2">
        {car.manufacturerName} {car.modelName}
      </Typography>
    }
    description={
      <Typography>
        Stock # {car.stockNumber} - {car.mileage.number}
        {car.mileage.unit.toUpperCase()} - {car.fuelType} -{' '}
        {capitalize(car.color)}
      </Typography>
    }
    link={<InlineLink to={`/car/${car.stockNumber}`}>View details</InlineLink>}
  />
);

export default CarsListItem;
