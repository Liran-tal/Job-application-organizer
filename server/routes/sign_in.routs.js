const express = require("express");
const Router = express.Router();
const {verifyUser} = require("../controllers/signIn/singIn_controllers.js");

Router.post("/create-user", Controler);

module.exports = Router;