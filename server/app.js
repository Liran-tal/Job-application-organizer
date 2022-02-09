require('./database/mongoose.js');
const express = require('express');
const path = require("path");
const cors = require('cors');
const usersRouter = require("./routes/users_routes.js");

const publicPath = path.join(__dirname, 'client/build');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.use("/api/users", usersRouter);
app.get('*', (req, res) => {
	res.status(404).send("Page Not Found");
});

module.exports = app;