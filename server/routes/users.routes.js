const express = require("express");
const Router = express.Router();

const {
	createUser,
	createJob,
	createManyJobs,
	getUserById,
	getJobs,
	updateJob,
	deleteJob,

} = require("../controllers/users/users_controllers.js");

Router.post("/user", createUser);

Router.post("/job", createJob);

Router.post("/jobs", createManyJobs);

Router.get("/user", getUserById);

Router.get("/jobs", getJobs);

Router.put("/job", updateJob);

Router.delete("/job", deleteJob)

module.exports = Router;
