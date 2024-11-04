const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    enum: [
      "Tamando",
      "Chandrasekharpur",
      "Patia",
      "Nayapalli",
      "Saheed Nagar",
      "Balianta",
      "Patrapada",
      "Kalinga Nagar",
      "Khandagiri",
      "Rasulgarh",
      "Sailashree Vihar",
      "Sundarpada",
      "IRC Village",
      "Jaydev Vihar",
      "Niladri Vihar",
      "Pahala",
      "Phulnakhara",
      "Madanpur",
    ],
    required: true,
  },
  property_type: {
    type: String,
    enum: [
      "Apartments",
      "Villas",
      "Luxury Homes",
      "Branded Residences",
      "Plot",
    ],
    required: true,
  },
  availability_status: {
    type: String,
    enum: ["Available", "Sold"],
    required: true,
  },
  configuration: {
    type: String,
    required: true,
  },
  carpet_area: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  featured_image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  furnishing: {
    type: String,
    enum: ["Fully Furnished", "Semi Furnished", "Unfurnished"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Under Construction", "ReSell", "Ready to Move"],
    required: true,
  },
  possession: {
    type: String,
    required: true,
  },
  gallery: {
    type: [String],
  },
  date_posted: {
    type: Date,
    default: Date.now,
  },
  last_updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Property", PropertySchema);
