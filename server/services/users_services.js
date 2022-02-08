const User = require("../schemas/user_schema.js");

const createUserService = async (newUserData) => {
	try {
		const newUser = await new User(newUserData).save();
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

const getActiveUsersService = async () => {
	try {
		const users = await User.find({$isActive: true});
		return users || [];
	}
	catch (error) {
		console.error(error);
		throw {status: 404, message: error.message};
	}
};

const getUsersByCashService = async (min, max) => {
	try {
		const users = await User.find({'cash': {$gte: min, $lt: max}});
		return users || [];
	}
	catch (error) {
		console.error(error);
		throw {status: 404, message: error.message};
	}
};

const toggleUserActiveService = async (id) => {
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

const updateCashService = async (id, amount, isToAdd) => {
	try {
		const user = await User.findById(id);
		if (!user) {
			return {"error": "User not found"};
		}
		if (!user.isActive) {
			return {"error": "User is not active. cannot complete action"}
		}

		if (isToAdd) {
			user.cash = user.cash + amount;
		}
		else {
			if (isCreditEnough (user, amount)) {
				user.cash = user.cash - amount;
			}
			else {
				return {"error:": "Not enough credit to complete transaction"};
			}
		}
		await user.save();
		return user;
	}
	catch (error) {
		console.error(error);
		throw {status: 404, message: error.message};
	}
};

const updateCreditService = async (id, newCredit) => {
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

const transferCashService = async (sourceId, targetId, amount) => {
	try {
		const source = await User.findById(sourceId);
		if (!source) {
			return {"error": "Source user not found"};
		}
		if (!source.isActive) {
			return {"error": "Source user is not active. cannot complete action"}
		}

		const target = await User.findById(targetId);
		if (!target) {
			return {"error": "Target user not found"};
		}
		if (!target.isActive) {
			return {"error": "Target user is not active. cannot complete action"}
		}
		
		if (isCreditEnough (source, amount)) {
			source.cash = source.cash - amount;
			target.cash = target.cash + amount;
		}
		else {
			return {"error:": "Source user does not have enough credit to complete transaction"};
		}
		
		// source.save();
		// target.save();
		await Promise.all([source.save(), target.save()]);
		return {"source": source, "target": target};
	}
	catch (error) {	
		console.error(error);
		throw {status: 404, message: error.message};
	}
};


module.exports = {
	createUserService,
	getUserByIdService,
	createJobService,
	getJobsService,
	updateJobService,
	deleteJobService,
};