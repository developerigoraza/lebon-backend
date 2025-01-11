const express = require("express");
const {
  addItemToMenu,
} = require("../controllers/adminControllers/adminController");

const routes = express.Router();

routes.post("/addtomenu", addItemToMenu);

module.exports = routes;
