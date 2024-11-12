const express = require("express");
const router = express.Router();

// **************************************************************
//                      Import Contact Controller
// **************************************************************
const {
  createContact,
  getAllContacts,
  getContactById,
} = require("../controllers/Contact.Controller");


// **************************************************************
//                      Contact Routes
// **************************************************************
router.post("/contacts", createContact);
router.get("/allcontacts", getAllContacts);
router.get("/contacts/:id", getContactById);

module.exports = router;