const express = require("express");
const Router = express.Router();

const controllers = require("../controllers/users/users_controllers.js");

Router.post("/user", controllers.createUser);

Router.post("/job", controllers.createJob);

Router.post("/jobs", controllers.createManyJobs);

Router.get("/user", controllers.getUserById);

Router.get("/jobs", controllers.getJobs);

Router.put("/job", controllers.updateJob);

Router.delete("/job", controllers.deleteJob);

module.exports = Router;
