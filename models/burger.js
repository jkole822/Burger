const orm = require("../config/orm");

const burger = {
	fetch: function (cb) {
		orm.selectAll(res => cb(res));
	},
	create: function (value, cb) {
		orm.insertOne(value, res => cb(res));
	},
	update: function (value, cb) {
		orm.updateOne(value, res => cb(res));
	},
};

module.exports = burger;
