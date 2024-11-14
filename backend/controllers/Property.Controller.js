const Property = require("../models/Property.model");
const mongoose = require("mongoose");

// Upload image to Cloudinary
exports.uploadImageToCloudinary = async (file, folder) => {
  const options = { folder, resource_type: "auto" };
  return await cloudinary.uploader.upload(file.tempFilePath, options);
};

// Add new property with image uploads
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
      status,
      possession,
    } = req.body;

    // Check if required fields are missing
    if (!title || !description || !price || !location || !property_type) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    // Upload images to Cloudinary
    const featuredImage = req.files.featured_image ? await this.uploadImageToCloudinary(req.files.featured_image, 'properties/featured') : null;
    const floorPlanImage = req.files.floor_plan ? await this.uploadImageToCloudinary(req.files.floor_plan, 'properties/floor_plan') : null;
    const galleryImages = req.files.gallery ? await Promise.all(req.files.gallery.map(file => this.uploadImageToCloudinary(file, 'properties/gallery'))) : [];

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
      featured_image: featuredImage ? featuredImage.secure_url : null,
      address,
      furnishing,
      status,
      possession,
      floor_plan: floorPlanImage ? floorPlanImage.secure_url : null,
      gallery: galleryImages.map(img => img.secure_url), // Store URLs of gallery images
    });

    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
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
    res
      .status(500)
      .json({ error: `Failed to retrieve properties: ${error.message}` });
  }
};

// Update property
exports.updateProperty = async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ error: "Property not found." });
    }

    res.status(200).json(updatedProperty);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to update property: ${error.message}` });
  }
};

// Get property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;

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
    console.error(error);
    res
      .status(500)
      .json({ error: `Failed to retrieve property: ${error.message}` });
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
    res
      .status(500)
      .json({ error: `Failed to delete property: ${error.message}` });
  }
};
