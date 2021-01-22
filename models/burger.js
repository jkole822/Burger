const orm = require("../config/orm");

const burger = {
	fetch: function (cb) {
		orm.selectAll((err, data) => cb(err, data));
	},
	create: function (value, cb) {
		orm.insertOne(value, (err, data) => cb(err, data));
	},
	update: function (value, cb) {
		orm.updateOne(value, (err, data) => cb(err, data));
	},
};

module.exports = burger;
