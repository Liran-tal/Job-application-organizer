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
	const userId = req.query.userId;
	if (!userId) {
		res.status(400).send("User Id required");
	};

	const newJob = req.body.newJob;
	if (!userId) {
		res.status(400).send("New job object required");
	};
	try {
		const savedJob = await Services.createJobService(userId, newJob);
		res.status(200).send(savedJob);
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
		const userId = req.query.userId;
		if (!userId) {
			throw { status: 400, message: "Request must contain user Id" };
		}

		const jobId = req.query.jobId;

		const jobData = await Services.getJobsService(userId, jobId);
		res.status(200).send(jobData);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};


const updateJobControler = async (req, res) => {
	try {
		const userId = req.query.userId;
		if (!userId) {
			const error = new Error ("Request must contain user Id");
			error.resStatus = 404;
			throw error;
		}

		const { jobData } = req.body;

		const resJob = await Services.updateJobService(userId, jobData);
		res.status(200).send(resJob);
	}
	catch (error) {
		console.error(error);
		res.status(404).send(error.message);
	}
};

const deleteJobControler = async (req, res) => {
	try {
		const userId = req.query.userId;
		if (!userId) {
			throw { status: 400, message: "Request must contain user Id" };
		}

		const jobId = req.query.jobId;
		if (!jobId) {
			throw { status: 400, message: "Request must contain user Id" };
		}

		const returnObj = await Services.deleteJobService(userId, jobId);
		res.status(200).send(JSON.stringify(returnObj));
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
