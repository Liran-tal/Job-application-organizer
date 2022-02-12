const User = require("../../models/user_schema");

const verifyUserControler = async (req, res) => {
	
	console.log("req.query: ", req.query);
	console.log("req.query.email: ", req.query.email);
	console.log("req.query.password: ", req.query.password);
	try {
		if (!req.query.email || !req.query.password) {
			throw { status: 400, message: "Request must contain email address and valid password" };
		}
		
		const user = await User.findOne({email: req.query.email});
		if (user && (user.password === req.query.password)) {
				res.status(200).send(user);
				return;
		}
		res.status(404).send({message: "Wrong Email or Password"});
	}
	catch (error) {
		res.status(error.status).send(error.message);
	}
};

module.exports = {
	verifyUserControler
};