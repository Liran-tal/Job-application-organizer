const Services = require("../../services/user_services");

const createUser = async (req, res) => {
	try {
		const user = req.body.newUser;
		const result = await Services.createUser(user);
		return res.status(200).send(result);
	}
	catch (error) {
		return res.status(400).send(error.message);
	}
};

const createJob = async (req, res) => {
	const {userId} = req.query;
	if (!userId) {
		return res.status(400).send("User Id required in query");
	};

	const {newJob} = req.body;
	if (!userId) {
		return res.status(400).send("New job object required in body");
	};
	try {
		const result = await Services.createJob(userId, newJob);
		if (!result){ 
			return res.status(404).send("Id not found");
		}
		
		return res.status(200).send(result);
	}
	catch (error) {
		return res.status(500).send(error.message);
	}
};

const createManyJobs = async (req, res) => {
	const { userId } = req.query;
	if (!userId) {
		return res.status(400).send("userId required in query");
	};

	const { newJobs } = req.body;
	if (!newJobs) {
		return res.status(400).send("New jobs array required in body");
	};

	try {
		const result = await Services.createManyJobs(userId, newJobs);
		if (!result){ 
			return res.status(404).send("Id not found");
		}
		return res.status(200).send(result);
	}
	catch (error) {
		return res.status(500).send(error.message);
	}
};

const getUserById = async (req, res) => {
	if (!req.query.userId) {
		return res.status(400).send("userId required");
	}

	try {
		const result = await Services.getUserById(req.query.userId);
		if (!result){ 
			return res.status(404).send("Id not found");
		}
		return res.status(200).send(result);
	}
	catch (error) {
		return res.status(500).send(error.message);
	}
};

const getJobs = async (req, res) => {
	try {
		const { userId } = req.query;
		if (!userId) {
			return res.status(400).send("userId required as query");
		}

		const { jobId } = req.query;
		if (!userId) {
			return res.status(400).send("jobId required as query");
		}

		const jobData = await Services.getJobs(userId, jobId);
		if (!result){ 
			return res.status(404).send("Id not found");
		}

		return res.status(200).send(jobData);
	}
	catch (error) {
		return res.status(500).send(error.message);
	}
};


const updateJob = async (req, res) => {
	console.log("req.query: ", req.query);
	try {
		const { userId } = req.query;
		if (!userId) {
			return res.status(400).send("userId required as query");
		}

		const { jobData } = req.body;
		if (!userId) {
			return res.status(400).send("jobData required as body");
		}

		const result = await Services.updateJob(userId, jobData);
		if (!result){ 
			return res.status(404).send("Id not found");
		}
		return res.status(200).send(result);
	}
	catch (error) {
		console.error(error);
		return res.status(500).send(error.message);
	}
};

const deleteJob = async (req, res) => {
	try {
		const {userId} = req.query;
		if (!userId) {
			return res.status(400).send("userId required as query");
		}

		const {jobId} = req.query;
		if (!jobId) {
			return res.status(400).send("jobId required as query");
		}

		const result = await Services.deleteJob(userId, jobId);
		if (!result){ 
			return res.status(404).send("Id not found");
		}
		return res.status(200).send(result);
	}
	catch (error) {
		return res.status(500).send(error.message);
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
