const express = require("express");
const Router = express.Router();
const {verifyUserControler} = require("../controllers/signIn/signIn_controllers.js");

Router.get("/verify-user", verifyUserControler);

module.exports = Router;