var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//includes routes for APIs and web pages
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//turns on server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  


