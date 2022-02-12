const mongoose = require("mongoose");
const User = require("../models/user_schema.js");
const utils = require('../utils/utils')

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
		await user.save();
		return user.applications;
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
		// const user = await User.findById(userId);
		// if (!user) {
		// 	throw { status: 404, message: error.message };
		// }
		// const edit = async (pasportId, 
		// 	userDto) => {
		// 	const userToEdit = await User.findOneAndUpdate(
		// 		{ pasportId: pasportId },
		// 		userDto,
		// 		{ new: true }
		// 	);
		// 	if (!userToEdit) {
		// 		throw new Error(`The user with id ${id} is not found`);
		// 	}
		// 	return userToEdit;
		// };

		// console.log(`\nUser before change dB: \n`, user.applications);
		// user.applications = utils.updateJobsArray(user.applications, job);
		const updatedJob = await User.findOneAndUpdate(
			{ "_id": userId, "applications._id": job._id },
			{ $set: { "applications.$": job } },
			{ new: true }
		)
		// await User.save();
		console.log(`\nUser After save to dB: \n`, updatedJob);
		// return User.applications;
		return updatedJob;
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
			{ $pull: { "applications": { "_id": jobId } } },
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