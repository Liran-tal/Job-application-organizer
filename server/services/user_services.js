const User = require("../models/user_schema.js");
const { findJobById } = require("../utils/utils.js");

const createUserService = async (newUserData) => {
	try {
		const newUser = new User(newUserData);
		const user = await newUser.save();
		return { ok: true, data: user, message: "Success", };
	}
	catch (error) {
		console.error("Error in createUserService: ", error);
		throw error;
	}
};


const createJobService = async (userId, newJob) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			return { ok: false, data: undefined, message: "User not found" };
		}

		user.applications.push(newJob);
		const resultUser = await user.save();
		return { 
			ok: true, 
			data: resultUser.applications[resultUser.applications.length - 1],
			message: "Success", 
		};
	}
	catch (error) {
		console.error(error);
		throw error;
	}
};


const createManyJobsService = async (userId, newJobs) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			return { ok: false, data: undefined, message: "User not found" };
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

const getJobsService = async (userId, jobId) => {
	try {
		const user = await User.findById(userId).lean();
		if (!user) {
			return { ok: false, data: undefined, message: "User not found" };
		}

		if (jobId) {
			const job = findJobById(user.applications, jobId);
			if (!job) {
				return { ok: false, data: undefined, message: "Application Not found" };
			}
			return { ok: true, data: job, message: "Success" };
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
		const updated = await User.findOneAndUpdate(
			{ "_id": userId, "applications._id": job._id },
			{ "applications.$": job },
			{ new: true }
		)
		if (!updated) {
			return { ok: false, data: undefined, message: "Not found" };
		}
		return { ok: true, data: job, message: "Success" };
	}
	catch (error) {
		console.error("Update service: ", error);
		throw error;
	}
};

const deleteJobService = async (userId, jobId) => {
	try {
		const deleted = await User.findOneAndUpdate(
			{ "_id": userId, "applications._id": jobId },
			{ $pull: { applications: { _id: jobId } } },
			{ multi: true },
		);

		if (!deleted) {
			return { ok: false, data: undefined, message: "Not found" };
		}

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
