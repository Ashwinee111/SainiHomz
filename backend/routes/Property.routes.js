const express = require("express");
const router = express.Router();

// **************************************************************
//                      Import Property Controller
// **************************************************************
const {
  addProperty,
  getAllProperties,
  updateProperty,
  deleteProperty,
  getPropertyById
} = require("../controllers/Property.Controller");

// **************************************************************
//                      Property Routes
// **************************************************************
router.post("/postproperty", addProperty);
router.get("/allproperty", getAllProperties);
router.get("/properties/:id", getPropertyById);
router.put("/updateproperty/:id", updateProperty); 
router.delete("/deleteproperty/:id", deleteProperty);

module.exports = router;
