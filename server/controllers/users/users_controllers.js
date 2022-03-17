const Services = require("../../services/user_services");

const createUser = async (req, res) => {
	try {
		const user = req.body.newUser;
		const resObj = await Services.createUser(user);
		res.status(200).send(resObj);
	}
	catch (error) {
		res.status(400).send(error.message);
	}
};

const createJob = async (req, res) => {
	const userId = req.query.userId;
	if (!userId) {
		res.status(400).send("User Id required");
	};

	const newJob = req.body.newJob;
	if (!userId) {
		res.status(400).send("New job object required");
	};
	try {
		const resObj = await Services.createJob(userId, newJob);
		res.status(200).send(resObj);
	}
	catch (error) {
		res.status(404).send(error.message);
	}
};

const createManyJobs = async (req, res) => {
	const { userId } = req.query;
	if (!userId) {
		res.status(400).send("userId required");
	};

	const { newJobs } = req.body;
	if (!newJobs) {
		res.status(400).send("New jobs array required");
	};

	try {
		const resObj = await Services.createManyJobs(userId, newJobs);
		res.status(200).send(resObj);
	}
	catch (error) {
		res.status(404).send(error.message);
	}
};

const getUserById = async (req, res) => {
	if (!req.query.userId) {
		res.status(400).send("userId required");
	}

	try {
		const resObj = await Services.getUserById(req.query.userId);
		res.status(200).send(resObj);
	}
	catch (error) {
		res.status(404).send(error.message);
	}
};

const getJobs = async (req, res) => {
	try {
		const { userId } = req.query;
		if (!userId) {
			res.status(400).send("userId required as query");
		}

		const {jobId} = req.query;
		if (!userId) {
			res.status(400).send("jobId required as query");
		}

		const jobData = await Services.getJobs(userId, jobId);
		res.status(200).send(jobData);
	}
	catch (error) {
		res.status(404).send(error.message);
	}
};


const updateJob = async (req, res) => {
	try {
		const {userId} = req.query;
		if (!userId) {
			res.status(400).send("jobId required as query");
		}

		const { jobData } = req.body;
		if (!userId) {
			res.status(400).send("jobData required as body");
		}

		const resObj = await Services.updateJob(userId, jobData);
		res.status(200).send(resObj);
	}
	catch (error) {
		console.error(error);
		res.status(404).send(error.message);
	}
};

const deleteJob = async (req, res) => {
	try {
		const userId = req.query.userId;
		if (!userId) {
			res.status(400).send("userId required as query");
		}

		const jobId = req.query.jobId;
		if (!jobId) {
			return res.status(400).send("jobId required as query");
		}

		const returnObj = await Services.deleteJob(userId, jobId);
		res.status(200).send(returnObj);
	}
	catch (error) {
		console.error("deleteJob, ", error)
		res.status(404).send(error.message);
	}
};


module.exports = {
	createUser,
	createJob,
	createManyJobs,
	getUserById,
	getJobs,
	updateJob,
	deleteJob,
};
