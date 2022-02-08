const validator = require("validator");
const Services = require("../../services/user_services");

const createUserControler = async (req, res) => {
	try {
		const newUser = await Services.createUserService(req.body.newUser);
		res.status(200).send(newUser);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const getUserByIdControler = async (req, res) => {
	try {
		console.log(req.query);
		if (!req.query.id) {
			throw {status: 400, message: "Id must contain digits (0-9)"};
		}
		const users = await Services.getUsersService(req.query.id);
		res.status(200).send(users);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const getActiveUsersControler = async (req, res) => {
	try {
		const users = await Services.getActiveUsersService();
		res.status(200).send(users);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const getUsersByCashControler = async (req, res) => {
	const min = setRangeNum(req.query.cashMin, "min");
	const max = setRangeNum(req.query.cashMax, "max");
	try {
		const users = await Services.getUsersByCashService(min, max);
		res.status(200).send(users);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const toggleUserActiveControler = async (req, res) => {
	try {
		if (req.query.id && !isValidId(req.query.id)) {
			throw {status: 400, message: "Id must contain digits (0-9) only"};
		}
		
		const users = await Services.toggleUserActiveService(req.query.id);
		res.status(200).send(users);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const updateCashControler = async (req, res) => {
	const id = req.query.id;
	const cashAmount = Number(req.query.cashAmount);
	try {
		if (id && !isValidId(id)) {
			throw {status: 400, message: "Id must contain digits (0-9) only"};
		}
		if (cashAmount && (!validator.isNumeric(String(cashAmount)) || cashAmount < 0)) {
			throw {status: 400, message: "Amount of money must contain digits (0-9) only and cannot be negative"};
		}

		const users = await Services.updateCashService(id, cashAmount);
		res.status(200).send(users);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const updateCreditControler = async (req, res) => {
	const id = req.query.id;
	const newCredit = Number(req.query.newCredit);
	try {
		if (id && !isValidId(id)) {
			throw {status: 400, message: "Id must contain digits (0-9) only"};
		}
		if (newCredit && (!validator.isNumeric(String(newCredit)) || newCredit < 0)) {
			throw {status: 400, message: "Credit value must contain digits (0-9) only and cannot b} negative"};
		}

		const users = await Services.updateCreditService(id, newCredit);
		res.status(200).send(users);

	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

const transferCashControler = async (req, res) => {
	try {
		const sourceId = req.query.sourctId;
		const targetId = req.query.targetId;
		const cashAmount = Number(req.query.cashAmount);
		if ((sourceId && !isValidId(sourceId)) || (targetId && !isValidId(targetId))) {
			throw {status: 400, message: "Id must contain digits (0-9) only"};
		}
		if (cashAmount && (!validator.isNumeric(String(cashAmount)) || cashAmount < 0)) {
			throw {status: 400, message: "Amount of money must contain digits (0-9) only and cannot be negative"};
		}

		const users = await Services.updateCashService(sourceId, targetId, cashAmount);
		res.status(200).send(users);
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};


module.exports = {
	createUserControler,
	getUserByIdControler,
	createJobControler,
	getJobsControler,
	updateJobControler,
	deleteJobControler,
};