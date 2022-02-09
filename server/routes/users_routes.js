const express = require("express");
const Router = express.Router();

const {
	createUserControler,
	getUserByIdControler,
	createJobControler,
	getJobsControler,
	updateJobControler,
	deleteJobControler,

} = require ("../controllers/users/users_controllers.js");

Router.post("/create-user", createUserControler);

Router.get("/get-user-by-id", getUserByIdControler);

Router.post("/create-job", createJobControler);

Router.get("/get-jobs", getJobsControler);

Router.put("/update-job", updateJobControler);

Router.delete("/delete-job", deleteJobControler)

module.exports = Router;