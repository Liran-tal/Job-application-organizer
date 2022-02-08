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

const createJobControler = async (req, res) => {
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

const getJobsControler = async (req, res) => {
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

const updateJobControler = async (req, res) => {
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

const deleteJobControler = async (req, res) => {
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


module.exports = {
	createUserControler,
	getUserByIdControler,
	createJobControler, // TODO: build
	getJobsControler,// TODO: build
	updateJobControler,// TODO: build
	deleteJobControler,// TODO: build
};