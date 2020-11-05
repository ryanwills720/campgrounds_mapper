// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var rating = {
  allByStateCity: function(city, state, cb) {
    orm.allByStateCity("campgrounds", function(res) {
      cb(res);
    });
  },
  allCitiesByState: function(state, cb) {
    orm.allCitiesByState("campgrounds", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("ratings", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (ratingController).
module.exports = rating;
