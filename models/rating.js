// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var rating = {
  all: function(cb) {
    orm.all("campgrounds", function(res) {
      cb(res);
    });
  }
  // The variables cols and vals are arrays.
  // create: function(cols, vals, cb) {
  //   orm.create("ratings", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  // update: function(objColVals, condition, cb) {
  //   orm.update("ratings", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = rating;
