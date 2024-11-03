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
      "Ploat",
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
    type: String,
    enum: [
      "Swimming Pool",
      "Fitness Center",
      "Clubhouse/Community Room",
      "Private Balcony/Terrace",
      "Pet-Friendly Facilities",
      "Parking Garage or Assigned Parking",
      "Smart Home Technology",
      "On-site Laundry or In-unit Washer/Dryer",
      "Security Systems",
      "Playground/Kid's Play Area",
      "Green Spaces/Landscaped Gardens",
      "Walking/Biking Trails",
      "Rooftop Deck",
      "Business Center/Co-working Spaces",
      "High-speed Internet Access",
      "Concierge Service",
      "Fireplace",
      "Outdoor Grilling Stations",
      "Spa/Wellness Center",
      "Storage Space",
      "Basketball/Tennis Courts",
      "Movie Theater/Media Room",
      "Conference Rooms/Meeting Spaces",
      "Elevators",
      "Cafeteria or Food Court",
      "Bike Storage",
      "Electric Vehicle Charging Stations",
      "24/7 Maintenance",
      "HVAC Systems",
      "Retail or On-site Shops",
    ],
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
  gallery: {
    type: String,
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
