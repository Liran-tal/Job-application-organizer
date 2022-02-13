const Services = require("../../services/user_services");

const createUserControler = async (req, res) => {
	try {
		const user = req.body.newUser;
		const newUser = await Services.createUserService(user);
		res.status(200).send(newUser);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const createJobControler = async (req, res) => {
	if (!req.body.userId) {
		throw { status: 400, message: "Request must contain user Id" };
	}
	const userId = req.body.userId;
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
	if (!req.body.userId) {
		throw { status: 400, message: "Request must contain user Id" };
	}
	const userId = req.body.userId;
	const newJobs = req.body;

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
		if (!req.query.userId) {
			throw { status: 400, message: "Request must contain user Id" };
		}
		const user = await Services.getUserByIdService(req.query.userId);
		res.status(200).send(user);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const getJobsControler = async (req, res) => {
	try {
		if (!req.query.userId) {
			throw { status: 400, message: "Request must contain user Id" };
		}
		const jobData = await Services.getJobsService(req.query.userId);
		res.status(200).send(jobData);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};


const updateJobControler = async (req, res) => {
	try {
		if (!req.body.userId) {
			throw { status: 400, message: "Request must contain user Id" };
		}
		const userId = req.body.userId;
		const job = req.body.jobData;
	
		const updatedJob = await Services.updateJobService(userId, job);
		res.status(200).send(updatedJob);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const deleteJobControler = async (req, res) => {
	try {
		if (!req.body.userId) {
			throw { status: 400, message: "Request must contain user Id" };
		}
		const userId = req.body.userId;
		const jobId = req.body.jobId;

		const deletedJob = await Services.deleteJobService(userId, jobId);
		res.status(200).send(JSON.stringify(deletedJob));
	}
	catch (error) {
		console.error("deleteJobControler, ", error)
		res.status(error.status).send(error.message);
	}
};


module.exports = {
	createUserControler,
	createJobControler, 
	createManyJobsControler,
	getUserByIdControler,
	getJobsControler,
	updateJobControler,
	deleteJobControler,
};