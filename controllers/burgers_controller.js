var express = require("express");

var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function(req, res) {
    var devoured = 0;
    if (req.body.devoured === "true") {
        devoured = 1;
    }
    burger.create(
        ["burger_name", "devoured"], [req.body.burger_name, devoured],
        function(result) {
            console.log(result);
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.update({
            devoured: req.body.devoured,
        }, condition,
        function(result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

router.takeoff("/api/burgers/:id", function(req, res) {
    const condition = `id = ${req.params.id}`;

    burger.takeoff(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;