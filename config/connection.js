const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: process.env.MY_PASS,
	database: "employee_tracker",
});

connection.connect(err => {
	if (err) {
		return console.error(`error connecting: ${err.stack}`);
	}
	console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
