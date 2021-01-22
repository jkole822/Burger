const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/api/burgers", (req, res) => {
	burger.fetch((err, data) => {
		if (err) return res.status(500).end();

		console.log(`Fetching burgers: ${data}`);

		hbsObject = {
			burgers: data,
		};

		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", (req, res) => {
	burger.create(req.body.burger, (err, data) => {
		if (err) return res.status(500).end();
		console.log(`Creating burgers: ${data}`);
		res.status(201).end();
	});
});

router.patch("/api/burgers/:id", (req, res) => {
	burger.update(req.params.id, (err, data) => {
		if (err) return res.status(500).end();
		console.log(`Updating burgers: ${data}`);
		res.status(200).end();
	});
});

module.exports = router;
