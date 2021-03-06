const util = require("util");

const connection = require("./connection");

const query = util.promisify(connection.query).bind(connection);

const orm = {
	selectAll: async function (cb) {
		try {
			const searchQuery = "SELECT * FROM burgers";
			const data = await query(searchQuery);
			cb(null, data);
		} catch (e) {
			cb(e);
		}
	},
	insertOne: async function (value, cb) {
		try {
			const createQuery = "INSERT INTO burgers (burger_name) VALUES (?)";
			const data = await query(createQuery, value);
			cb(null, data);
		} catch (e) {
			cb(e);
		}
	},
	updateOne: async function (value, cb) {
		try {
			let updateQuery = "UPDATE burgers SET devoured = 1 ";
			updateQuery += "WHERE burgers.id = ? ";
			const data = await query(updateQuery, value);
			cb(null, data);
		} catch (e) {
			cb(e);
		}
	},
	delete: async function (cb) {
		try {
			let deleteQuery = "DELETE FROM burgers ";
			deleteQuery += "WHERE burgers.devoured = 1";
			const data = await query(deleteQuery);
			cb(null, data);
		} catch (e) {
			cb(e);
		}
	},
};

module.exports = orm;
