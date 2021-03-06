const mysql = require("mysql");
require("dotenv").config();

let connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: process.env.MY_PASS,
		database: "burgers_db",
	});
}

connection.connect(err => {
	if (err) {
		return console.error(`error connecting: ${err.stack}`);
	}
	console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
