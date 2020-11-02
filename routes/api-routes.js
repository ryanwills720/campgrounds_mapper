// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();


// Routes
// =============================================================
module.exports = function(app) {

  // If a user sends data to add a new character..
  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    db.Todo.findAll({}) .then(data=>{
      console.log(data);
      res.json(data);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    db.Todo.create(req.body).then(results => res.json(results));
  });

};

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    let id = req.params.id;
    db.Todo.destroy({
      where: {
        id: id
      }
    }).then(results => res.json(results));


  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    db.Todo.update(req.body, {where: {id: req.body.id}}).then(results => res.json(results));




  });

