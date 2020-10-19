var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    
    MakeNew: function(cols, vals, cb) {
        orm.MakeNew("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    takeoff(condition, cb) {
        orm.takeoff('burgers', condition, function(res) {
            cb(res);
        });
    },
};



module.exports = burger;
