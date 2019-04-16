const mongoose = require('mongoose');
const joi = require('joi');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 50 },
  city: { type: String, required: true, trim: true, maxlength: 50 },
  street: { type: String, required: true, trim: true, maxlength: 50 },
  openingHours: { type: String, required: true, trim: true },
  reservationHours: { type: String, required: true, trim: true },
  restaurantPhone: { type: Number, required: true, trim: true },
  moreDetails: { type: String, required: true, trim: true, maxlength: 500 },
  kosher: { type: Boolean, required: true },
  takeAway: { type: Boolean, required: true },
  parking: { type: Boolean, required: true },
  delivery: { type: Boolean, required: true },
  tables: [{ anountOfDiners: String, tableCount: String }],
  creator: { type: mongoose.Schema.Types.ObjectId }
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

function validateRestaurant(restaurant) {
  const schema = {
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
      .label('Reservation hours'),
    kosher: joi
      .boolean()
      .required()
      .label('Kosher'),
    takeAway: joi
      .boolean()
      .required()
      .label('Take away'),
    parking: joi
      .boolean()
      .required()
      .label('Parking'),
    delivery: joi
      .boolean()
      .required()
      .label('Delivery'),
    tables: joi
      .array()
      .items(
        joi
          .object()
          .keys({
            anountOfDiners: joi
              .number()
              .min(0)
              .max(50)
              .required()
              .label('Amount of diners'),
            tableCount: joi
              .number()
              .min(0)
              .max(50)
              .required()
              .label('Tables count')
          })
          .required()
      )
      .required()
      .label('Tables')
  };

  return joi.validate(restaurant, schema);
}

module.exports = {
  Restaurant,
  validateRestaurant
};
