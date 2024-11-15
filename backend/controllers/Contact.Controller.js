const Contact = require("../models/Contact.model");
const mongoose = require("mongoose");

// create a new contact
exports.createContact = async (req, res) => {
  try {
    // Check if the email already exists
    const existingContact = await Contact.findOne({ email: req.body.email });
    if (existingContact) {
      return res.status(400).json({
        success: false,
        message: "You have already submitted your details.",
      });
    }

    // If email does not exist, create a new contact
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting contact form",
      error: error.message,
    });
  }
};

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching contacts",
      error: error.message,
    });
  }
};

// Get a single contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching contact",
      error: error.message,
    });
  }
};

// Update a contact by ID
// exports.updateContact = async (req, res) => {
//   try {
//     const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!contact) {
//       return res.status(404).json({
//         success: false,
//         message: "Contact not found",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "Contact updated successfully",
//       data: contact,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Error updating contact",
//       error: error.message,
//     });
//   }
// };

// Delete a contact by ID
// exports.deleteContact = async (req, res) => {
//   try {
//     const contact = await Contact.findByIdAndDelete(req.params.id);
//     if (!contact) {
//       return res.status(404).json({
//         success: false,
//         message: "Contact not found",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "Contact deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error deleting contact",
//       error: error.message,
//     });
//   }
// };
