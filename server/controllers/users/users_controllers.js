const validator = require("validator");
const User = require("../../models/user_schema");
const Services = require("../../services/user_services");

const createUserControler = async (req, res) => {
	try {
		const user = req.body
		const newUser = await Services.createUserService(user);
		res.status(200).send(newUser);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const createJobControler = async (req, res) => {
	if (!req.query.userId) {
		throw { status: 400, message: "Id must contain digits (0-9)" };
	}
	const userId = req.query.userId;
	const newJob = req.body.newJob;

	try {
		const user = await Services.createJobService(userId, newJob);
		res.status(200).send(user);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const createManyJobsControler = async (req, res) => {
	if (!req.query.userId) {
		throw { status: 400, message: "Id must contain digits (0-9)" };
	}
	const userId = req.query.userId;
	const newJobs = req.body;
	console.log(`\nreq.body:\n`, req.body);

	try {
		const user = await Services.createManyJobsService(userId, newJobs);
		res.status(200).send(user);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const getUserByIdControler = async (req, res) => {
	try {
		if (!req.query.id) {
			throw { status: 400, message: "Id must contain digits (0-9)" };
		}
		const users = await Services.getUserByIdService(req.query.id);
		res.status(200).send(users);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const getJobsControler = async (req, res) => {
	try {
		if (!req.query.userId) {
			throw { status: 400, message: "Id must contain digits (0-9)" };
		}
		const users = await Services.getJobsService(req.query.userId);
		res.status(200).send(users);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};


const updateJobControler = async (req, res) => {
	try {
		if (!req.query.userId) {
			throw { status: 400, message: "Id must contain digits (0-9)" };
		}
		const userId = req.query.userId;
		const job = req.body.jobData;
		// console.log(job);
	
		const users = await Services.updateJobService(userId, job);
		res.status(200).send(users);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const deleteJobControler = async (req, res) => {
	try {
		if (req.query.id && !isValidId(req.query.id)) {
			throw { status: 400, message: "Id must contain digits (0-9) only" };
		}

		const users = await Services.toggleUserActiveService(req.query.id);
		res.status(200).send(users);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const getFullJobData = async (req, res) => {
	try {
		const { userId, jobId } = req.params
		const user = await User.findOneById({ _id: userId });
		const job = user?.applications.find(app => app._id === jobId)
		res.status(200).send(job)
	} catch (err) {
		res.send(err)
	}
}

module.exports = {
	createUserControler,
	createJobControler, 
	createManyJobsControler,
	getUserByIdControler,
	getJobsControler,
	updateJobControler,
	deleteJobControler,
	getFullJobData,
};