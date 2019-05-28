//express dependencies
var express = require ("express");
var mongoose = require ("mongoose");
var expressHandlebars = require ("express-handlebars");
var bodyParser = require ("body-parser");

//set-up our port to be either the host's designated , or 3000
var PORT = process.env.PORT || 3000;

//Instantiate our Express 
var app = express();

//set up an Express Router
var router = express.Router();

//Designate our public folder to be a static directory
app.use(express.static( __dirname + "/public"));

//Connect Handlebars to our express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//use bodyParser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));

//Every request will go through our router middleware
app.use(router);


var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//Connect mongoose to our database
mongoose.connect(db, function(error){
 if (error) {
     console.log(error);
 }
 //or log a success message
 else {
     console.log("mongoose connection is successful");
 }
});













//Listen on the port
app.listen(PORT, function(){
    console.log("Listening on port:" + PORT)
});