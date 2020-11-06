
var db = require("../models/rating");
var express = require("express");
var orm = require("../config/orm")

// Sets up the Express App
// =============================================================
var app = express();
var rating = require("../models/rating.js");
// Routes
// =============================================================
module.exports = function (app) {
  // route to get apikey for NPS API
  app.get("/apikey", function (req, res) {
    if (process.env.NPS_API) {
      res.json({
        apikey: process.env.NPS_API
      })
    } else {
      console.log("not heroku no APIkey found")
    }
  });


  app.get("/", function (req, res) {
    // If there is a state query param...
    if (req.query.state) {
      let stateSelected = req.query.state // ex. "CO"

      // get campgrounds by state, and send maps API key
      orm.campgroundsByState(stateSelected, function (stateCampgrounds) {
        res.render("index", {
          mapsapikey: process.env.MAPS_API,
          campgrounds: stateCampgrounds
        });
      });
    } else { // return no campgrounds for home page, and send MAPS API key
      res.render("index", {
        mapsapikey: process.env.MAPS_API,
        campgrounds: []
      });
    }

  });

  // If a user sends data to add a new character..
  // GET route for getting all of the todos
  app.get("/api/campgrounds", function (req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    db.Rating.findAll({}).then(data => {
      console.log(data);
      res.json(data);
    });
  });

  app.post("/api/ratings", function (req, res) {
    rating.create([
      "camp_name", "rating"
    ], [
      req.body.camp_name, req.body.rating
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

};

// DELETE route for deleting ratings. We can get the id of the Rating to be deleted from
// req.params.id
app.delete("/api/ratings/:id", function (req, res) {
  let id = req.params.id;
  db.Rating.destroy({
    where: {
      id: id
    }
  }).then(results => res.json(results));


});

// PUT route for updating ratings. We can get the updated Rating data from req.body
app.put("/api/ratings", function (req, res) {
  db.Rating.update(req.body, { where: { id: req.body.id } }).then(results => res.json(results));




});

