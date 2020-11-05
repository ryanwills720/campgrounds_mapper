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
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}


var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM campgrounds WHERE state = ? order by rand() LIMIT 1,4"
    connection.query(queryString, ["IL"], function(err, result) {
      if (err) {
        throw err;
      }
      // console.log(result);
      cb(result);
    });
  },

  campgroundsByState: function(state, cb) {
    console.log(state);
    var queryString = "SELECT * FROM campgrounds WHERE state = ? order by rand() LIMIT 1,4"
    connection.query(queryString, [state], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
//   all: async function () {
//     var queryString = "SELECT * FROM campgrounds WHERE state = ? order by rand() LIMIT 1,15";
//     let data = await connection.query(queryString, ["IL"]);
//     console.log('=========================');
//     console.log(data);
//     console.log('==========================');
//   },

  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }

  // An example of objColVals would be {name: panther, sleepy: true}
  // update: function(table, objColVals, condition, cb) {
  //   var queryString = "UPDATE " + table;

  //   queryString += " SET ";
  //   queryString += objToSql(objColVals);
  //   queryString += " WHERE ";
  //   queryString += condition;

  //   console.log(queryString);
  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // }
};

// Export the orm object for the model rating.js
module.exports = orm;