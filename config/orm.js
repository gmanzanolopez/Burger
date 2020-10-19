var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res)
        });
    },
    insertOne: function(newBurger, cb) {
        let queryString = "INSERT INTO burger (burger_name) VALUES (" + newBurger + ");";

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: function(burgerId, cb) {
        let queryString = "UPDATE burgers SET devoured = true WHERE id = " + burgerId;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    }
};
module.exports = orm;