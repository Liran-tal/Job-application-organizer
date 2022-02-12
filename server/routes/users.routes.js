const express = require("express");
const Router = express.Router();

const {
	createUserControler,
	createJobControler,
	createManyJobsControler,
	getUserByIdControler,
	getJobsControler,
	updateJobControler,
	deleteJobControler,
	getFullJobData

} = require("../controllers/users/users_controllers.js");

Router.post("/create-user", createUserControler);

Router.post("/create-job", createJobControler);

Router.post("/create-many-jobs", createManyJobsControler);

Router.get("/get-user-by-id", getUserByIdControler);

Router.get("/get-jobs", getJobsControler);

Router.put("/update-job", updateJobControler);

Router.delete("/delete-job", deleteJobControler)

module.exports = Router;