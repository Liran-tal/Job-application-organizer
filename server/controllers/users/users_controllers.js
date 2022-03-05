const Services = require("../../services/user_services");

const createUserControler = async (req, res) => {
	try {
		const user = req.body.newUser;
		const resObj = await Services.createUserService(user);
		res.status(200).send(resObj);
	}
	catch (error) {
		res.status(400).send(error.message);
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
		const resObj = await Services.createJobService(userId, newJob);
		res.status(200).send(resObj);
	}
	catch (error) {
		res.status(404).send(error.message);
	}
};

const createManyJobsControler = async (req, res) => {
	const { userId } = req.query;
	if (!userId) {
		res.status(400).send("userId required");
	};

	const { newJobs } = req.body;
	if (!newJobs) {
		res.status(400).send("New jobs array required");
	};

	try {
		const resObj = await Services.createManyJobsService(userId, newJobs);
		res.status(200).send(resObj);
	}
	catch (error) {
		res.status(404).send(error.message);
	}
};

const getUserByIdControler = async (req, res) => {
	if (!req.query.userId) {
		res.status(400).send("userId required");
	}

	try {
		const resObj = await Services.getUserByIdService(req.query.userId);
		res.status(200).send(resObj);
	}
	catch (error) {
		res.status(404).send(error.message);
	}
};

const getJobsControler = async (req, res) => {
	try {
		const { userId } = req.query;
		if (!userId) {
			res.status(400).send("userId required as query");
		}

		const {jobId} = req.query;
		if (!userId) {
			res.status(400).send("jobId required as query");
		}

		const jobData = await Services.getJobsService(userId, jobId);
		res.status(200).send(jobData);
	}
	catch (error) {
		res.status(404).send(error.message);
	}
};


const updateJobControler = async (req, res) => {
	try {
		const {userId} = req.query;
		if (!userId) {
			res.status(400).send("jobId required as query");
		}

		const { jobData } = req.body;
		if (!userId) {
			res.status(400).send("jobData required as body");
		}

		const resObj = await Services.updateJobService(userId, jobData);
		res.status(200).send(resObj);
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
			res.status(400).send("userId required as query");
		}

		const jobId = req.query.jobId;
		if (!jobId) {
			return res.status(400).send("jobId required as query");
		}

		const returnObj = await Services.deleteJobService(userId, jobId);
		res.status(200).send(returnObj);
	}
	catch (error) {
		console.error("deleteJobControler, ", error)
		res.status(404).send(error.message);
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
