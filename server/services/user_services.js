const User = require("../models/user_schema.js");

const createUserService = async (newUserData) => {
	try {
		const newUser = new User(newUserData);
		const user = await newUser.save();
		return user;
	}
	catch (error) {
		console.error("Error in createUserService: ", error);
		throw { status: 400, message: error.message };
	}
};


const createJobService = async (userId, newJob) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			throw { status: 404, message: error.message };
		}

		user.applications.push(newJob);
		const resultUser = await user.save();
		return resultUser.applications[resultUser.applications.length - 1];
	}
	catch (error) {
		console.error(error);
		throw { status: 400, message: error.message };
	}
};


const createManyJobsService = async (userId, newJobs) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			throw { status: 404, message: error.message };
		}
		newJobs.forEach((job) => {
			user.applications.push(job);
		});
		await user.save();
		return user;
	}
	catch (error) {
		console.error(error);
		throw { status: 400, message: error.message };
	}
};

const getUserByIdService = async (id) => {
	try {
		const user = await User.findById(id);
		return user || [];
	}
	catch (error) {
		console.error(error);
		throw { status: 500, message: error.message };
	}
};

const getJobsService = async (userId) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			throw { status: 404, message: error.message };
		}
		return user.applications;
	}
	catch (error) {
		console.error(error);
		throw { status: 500, message: error.message };
	}
};

const updateJobService = async (userId, job) => {
	try {
		await User.findOneAndUpdate(
			{ "_id": userId, "applications._id": job._id },
			{ $set: { "applications.$": job } },
			{ new: true }
		)
		return job;
	}
	catch (error) {
		console.error(error);
		throw { status: 500, message: error.message };
	}
};

const deleteJobService = async (userId, jobId) => {
	try {
		await User.findOneAndUpdate(
			{ "_id": userId, "applications._id": jobId },
			{ $pull: { applications: { _id: jobId } } },
			{ safe: true, multi: true },
		)

		return { success: true, message: `objId: ${jobId} deleted` };
	} catch (error) {
		throw { status: 404, message: error.message };
	}
};




module.exports = {
	createUserService,
	createJobService,
	createManyJobsService,
	getUserByIdService,
	getJobsService,
	updateJobService,
	deleteJobService,
};
