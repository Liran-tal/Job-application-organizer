const User = require("../models/user_schema.js");
const { findJobById } = require("../utils/utils.js");

const createUser = async (newUserData) => {
	try {
		const newUser = new User(newUserData);
		const user = await newUser.save();
		return user;
	}
	catch (error) {
		console.error("Error in createUser: ", error);
		throw error;
	}
};


const createJob = async (userId, newJob) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			return false;
		}

		user.applications.push(newJob);
		const resultUser = await user.save();
		return resultUser.applications[resultUser.applications.length - 1];			
	}
	catch (error) {
		console.error(error);
		throw error;
	}
};


const createManyJobs = async (userId, newJobs) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			return false;
		}
		newJobs.forEach((job) => {
			user.applications.push(job);
		});
		await user.save();
		return user;
	}
	catch (error) {
		console.error(error);
		throw error;
	}
};

const getUserById = async (id) => {
	try {
		const user = await User.findById(id);
		return user;
	}
	catch (error) {
		console.error(error);
		throw error;
	}
};

const getJobs = async (userId, jobId) => {
	try {
		const user = await User.findById(userId).lean();
		if (!user) {
			return false;
		}

		if (jobId) {
			const job = findJobById(user.applications, jobId);
			if (!job) {
				return false;
			}
			return job;
		}

		return user.applications;
	}
	catch (error) {
		console.error(error);
		throw error;
	}
};

const updateJob = async (userId, job) => {
	try {
		const updated = await User.findOneAndUpdate(
			{ "_id": userId, "applications._id": job._id },
			{ "applications.$": job },
			{ new: true }
		)
		if (!updated) {
			return false;
		}
		return job;
	}
	catch (error) {
		console.error("Update service: ", error);
		throw error;
	}
};

const deleteJob = async (userId, jobId) => {
	try {
		const deleted = await User.findOneAndUpdate(
			{ "_id": userId, "applications._id": jobId },
			{ $pull: { applications: { _id: jobId } } },
			{ multi: true },
		);

		if (!deleted) {
			return false;
		}

		return `Job, Id: ${jobId}, deleted`;
	} catch (error) {
		console.error("deleteJob, ", error);
		throw error;
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
