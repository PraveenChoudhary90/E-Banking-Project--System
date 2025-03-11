const express = require("express");
const route = express.Router();
const CustomerController = require("../controllers/CustomerController");


route.post("/InsertData", CustomerController.InsertUserData );










module.exports = route;