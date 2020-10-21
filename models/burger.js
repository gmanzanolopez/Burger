var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    MakeNew: function(newBurger, cb) {
        orm.MakeNew(newBurger, function(res) {
            cb(res);
        });
    },
    update: function(burgerId, cb) {
        orm.update(burgerId, function(res) {
            cb(res);
        });
    }
};
module.exports = burger;