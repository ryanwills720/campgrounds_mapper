var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;

// // Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars:
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================

require("./routes/api-routes.js")(app);
// require("./controllers/ratingController")(app)
// Syncing our sequelize models and then starting our Express app
// =============================================================
// var routes = require("./controllers/ratingController.js");
// var orm = require("./config/orm");

// orm.all();
// app.use(routes);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
})

