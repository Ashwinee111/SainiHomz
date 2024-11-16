const Property = require("../models/Property.model");
const mongoose = require("mongoose");

exports.addProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      location,
      property_type,
      availability_status,
      configuration,
      carpet_area,
      bedrooms,
      bathrooms,
      amenities,
      address,
      furnishing,
      featured_image,
      gallery,
      floor_plan,
      status,
      possession
    } = req.body;

    // Check if required fields are missing
    if (!title || !description || !price || !location || !property_type) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    const newProperty = new Property({
      title,
      description,
      price,
      location,
      property_type,
      availability_status,
      configuration,
      carpet_area,
      bedrooms,
      bathrooms,
      amenities,
      address,
      furnishing,
      featured_image,
      gallery,
      floor_plan,
      status,
      possession
    });

    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Failed to add property: ${error.message}` });
  }
};

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    if (!properties.length) {
      return res.status(404).json({ error: "No properties found." });
    }
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: `Failed to retrieve properties: ${error.message}` });
  }
};

// Update property
exports.updateProperty = async (req, res) => {
  try {
    const id = req.params.id.trim(); // Trim any extra whitespace or newline

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid property ID format." });
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ error: "Property not found." });
    }

    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ error: `Failed to update property: ${error.message}` });
  }
};

// Get property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const id = req.params.id.trim(); // Trim any extra whitespace or newline

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid property ID format." });
    }

    const property = await Property.findById(id);

    if (!property) {
      return res.status(404).json({ error: "Property not found." });
    }

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: `Failed to retrieve property: ${error.message}` });
  }
};

// Delete property
exports.deleteProperty = async (req, res) => {
  try {
    const id = req.params.id.trim(); // Trim any extra whitespace or newline

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid property ID format." });
    }

    const deletedProperty = await Property.findByIdAndDelete(id);

    if (!deletedProperty) {
      return res.status(404).json({ error: "Property not found." });
    }

    res.status(200).json({ message: "Property successfully deleted." });
  } catch (error) {
    res.status(500).json({ error: `Failed to delete property: ${error.message}` });
  }
};