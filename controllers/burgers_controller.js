var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function(req, res) {
    burger.MakeNew([req.body.name], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let burgerId = req.params.id;
    burger.update(burgerId, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end()
    })
})
module.exports = router;