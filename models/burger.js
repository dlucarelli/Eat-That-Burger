const orm = require("../config/orm");

let burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
        console.log(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;