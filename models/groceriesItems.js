var orm = require("../config/orm.js");

var groceriesItems = {
  all: function(cb) {
    orm.all("groceries_items", function(res) {
      cb(res);
    });
  },
  findItem: function(objectValue,cb){
    orm.searchOne("groceries_items", objectValue, function(res){
      cb(res);
    })
  },
  // table, col, value,colCondition, valCondition
  create: function(objectValue, cb) {
    orm.insert("groceries_items", objectValue, function(res) {
      cb(res);
    });
  },

  update: function(objectValue, conditionValue, cb) {
    orm.update("groceries_items", objectValue, conditionValue, function(res) {
      cb(res);
    });
  },
  delete: function(conditionValue, cb){
    orm.delete("groceries_items",conditionValue, function(res){
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = groceriesItems;