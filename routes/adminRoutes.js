const express = require("express");
const {
  addItemToMenu,
} = require("../controllers/adminControllers/menuController");

const routes = express.Router();

routes.post("/addtomenu", addItemToMenu);

module.exports = routes;
