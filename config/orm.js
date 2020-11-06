var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}


var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM campgrounds WHERE state = ? order by rand() LIMIT 1,10"
    connection.query(queryString, ["IL"], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  campgroundsByState: function(state, cb) {
    var queryString = "SELECT * FROM campgrounds WHERE state = ? order by rand() LIMIT 1,10"
    connection.query(queryString, [state], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }

};

// Export the orm object for the model rating.js
module.exports = orm;