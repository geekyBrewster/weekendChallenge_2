var express = require("express");
var app = express();
var path = require("path");
var port = 5002;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var calculation = require("./modules/calculations.js");

// Receive data from the client
app.post("/calculate", function(req, res){
  // Retrieve data from client and set up variables
  var mathData = req.body;
    // console.log("Server has received: " + mathData);
  var num1 = parseInt(mathData.number1);
  var num2 = parseInt(mathData.number2);
  var operator = mathData.type;
  var result;
    // console.log(num1 + num2 + operator);

  // Do the Math
  result = calculation(num1, num2, operator);
  console.log(result);

  // Send result back to client
  theResult = {answer: result};
  res.send(theResult);
});

// Catch-all for requests
app.get("/*", function(req, res){
  var file = req.params[0] || "views/index.html";
  res.sendFile(path.join(__dirname, "public", file));
});

// Start up the server
app.listen(port, function(){
  console.log("Server up and running on port " + port);
});
