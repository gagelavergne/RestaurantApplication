var express = require("express");
var bodyParser = require("bosy-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParsser.urlencoded({ extended: false}));
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controller/burgersController.js");

app.use("/", routes);
app.use("/update", routes);
app.use("?create", routes);

app.listen(Port, function() {
	console.log("Listening on port", PORT);
});
