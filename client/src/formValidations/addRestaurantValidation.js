import joi from 'joi';

export const schema = {
  name: joi
    .string()
    .required()
    .max(50)
    .label('Name'),
  city: joi
    .string()
    .max(50)
    .required()
    .label('City'),
  street: joi
    .string()
    .max(50)
    .required()
    .label('Street'),
  openingHours: joi
    .string()
    .required()
    .label('Opening hours'),
  restaurantPhone: joi
    .number()
    .required()
    .label('Restaurant phone'),
  moreDetails: joi
    .string()
    .required()
    .max(500)
    .label('More details'),
  reservationHours: joi
    .string()
    .required()
    .label('Reservation hours')
};
