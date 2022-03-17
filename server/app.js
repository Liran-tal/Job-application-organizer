require('./database/mongoose.js');
const express = require('express');
const path = require("path");
const cors = require('cors');
const usersRouter = require("./routes/users.routes.js");
const signInRouter = require("./routes/sign_in.routs");

const publicPath = path.join(path.dirname(__dirname), 'client/build');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));

app.get('/', (req, res) => {
	// res.sendFile(path.resolve(publicPath, 'index.html'));
	res.send(path.resolve(publicPath, 'index.html'));
});

app.use("/api/users", usersRouter);

app.use('/api/sign-in', signInRouter);

app.use((req, res) => {
	res.status(404).send("Error 404: Page Not Found");
});

module.exports = app;
