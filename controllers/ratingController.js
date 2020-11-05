// NOT USING THIS FILE

// var express = require("express")

// var router = express.Router();

// // Import the model (rating.js) to use its database functions.
// var rating = require("../models/rating.js");

// // Create all our routes and set up logic within those routes where required.
// app.get("/", function(req, res) {
//   console.log("ratingsController.js")
//   rating.all(function(data) {

//     var hbsObject = {
//       ratings: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// app.post("/api/ratings", function(req, res) {
//   rating.create(["name", ], [req.body.name, req.body.sleepy], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });



// // Export routes for server.js to use.
// module.exports = app;
