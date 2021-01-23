const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
	burger.fetch((err, data) => {
		if (err) return res.status(500).end();
		console.log("Fetching burgers: ");
		console.table(data);
		hbsObject = {
			burgers: data,
		};
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", (req, res) => {
	burger.create(req.body.burger_name, (err, data) => {
		if (err) return res.status(500).end();
		console.log("Creating burgers:");
		console.table(data);
		res.status(201).end();
	});
});

router.patch("/api/burgers/:id", (req, res) => {
	burger.update(req.params.id, (err, data) => {
		if (err) return res.status(500).end();
		console.log("Updating burgers:");
		console.table(data);
		res.status(200).end();
	});
});

module.exports = router;
