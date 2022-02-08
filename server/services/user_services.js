const { Mongoose } = require("mongoose");
const User = require("../models/user_schema.js");

const createUserService = async (newUserData) => {
	const newUser = new User(newUserData);
	newUser.id = (new Mongoose.Types.ObjectId()).toString();
	try {
		await newUser.save();
		return newUser;
	}
	catch (error) {
		console.error(error);
		throw {status: 400, message: error.message};
	}
};


const createJobService = async (newUserData) => {
	const newUser = new User(newUserData);
	newUser.id = (new Mongoose.Types.ObjectId()).toString();
	try {
		await newUser.save();
		return newUser;
	}
	catch (error) {
		console.error(error);
		throw {status: 400, message: error.message};
	}
};

const getUserByIdService = async (id) => {
	try {
		const users = await User.findById(id);
		return users || [];
	}
	catch (error) {
		console.error(error);
		throw {status: 404, message: error.message};
	}
};

const getJobsService = async (id) => {
	try {
		const users = await User.findById(id);
		return users || [];
	}
	catch (error) {
		console.error(error);
		throw {status: 404, message: error.message};
	}
};

const updateJobService = async (id) => {
	try {
		const user = await User.findById(id);
		if (!user) {
			return {"error": "User not found"};
		}

		user.isActive = !user.isActive;
		await user.save();
		return user;
	}
	catch (error) {
		console.error(error);
		throw {status: 404, message: error.message};
	}
};

const deleteJobService = async (id, newCredit) => {
	try {
		const user = await User.findById(id);
		if (!user) {
			return {"error": "User not found"};
		}
		if (!user.isActive) {
			return {"error": "User is not active. cannot complete action"}
		}

		user.credit = newCredit;
		await user.save();
		return user;
	}
	catch (error) {
		console.error(error);
		throw {status: 404, message: error.message};
	}
};




module.exports = {
	createUserService,
	getUserByIdService,
	createJobService, // TODO: build
	getJobsService,// TODO: build
	updateJobService,// TODO: build
	deleteJobService,// TODO: build
};