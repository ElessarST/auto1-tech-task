import React from 'react';
import { CardMedia, Typography } from '@mui/material';
import InlineLink from '../InlineLink';
import { Car } from '../../types/Car';
import CarsListItemLayout from './CarsListItemLayout';
import { getCarDescription } from '../../utils/getCarDescription';
import { getCarName } from '../../utils/getCarName';

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
    title={<Typography variant="h2">{getCarName(car)}</Typography>}
    description={<Typography>{getCarDescription(car)}</Typography>}
    link={<InlineLink to={`/car/${car.stockNumber}`}>View details</InlineLink>}
  />
);

export default CarsListItem;
