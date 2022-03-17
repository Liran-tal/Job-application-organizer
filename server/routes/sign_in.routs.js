const express = require("express");
const Router = express.Router();
const {verifyUser} = require("../controllers/signIn/signIn_controllers.js");

Router.get("/user", verifyUser);

module.exports = Router;
