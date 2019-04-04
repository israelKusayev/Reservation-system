const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
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
  tables: [{ anountOfDiners: String, tableCount: String }]
});

module.exports = Restaurant = mongoose.model('restaurant', restaurantSchema);
