var express = require("express");
var app = express();
var path = require("path");
var port = 5002;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var calculation = require("./modules/calculations.js");

// Receive data from the client
app.post("/calculate", function(req, res){
  // Retrieve data from client -- now arrays of numbers and operators
  var mathData = req.body;
  var numbers = mathData.numberArray;
  var operators = mathData.operatorArray;
  var num1 = 0;
  var num2 = 0;
  var answer;
    console.log("Server has received: " + numbers);
    console.log("Server has received: " + operators);

// For loops to step through the numbers and operators array to do math
// numbers = [12,45,65,10] & operators = ['add', 'add', 'subtract']
  for(var i = 0; i < numbers.length; i++){
    var result;
    if(i === 0){
      num1 = parseInt(numbers[i]);  //[0] = 12
      num2 = parseInt(numbers[i + 1]);  //[1] = 45
      operator = operators[i];  // first add
      result = calculation(num1, num2, operator);
        if(result < 1 && result > 0){
          answer = result.toFixed(4);
        } else {
          answer = result;
        }
      i +=1;
      console.log(result);
    } else {
      num1 = answer;  //37
      num2 = parseInt(numbers[i]);
      operator = operators[i - 1];
      result = calculation(num1, num2, operator);
      if(result < 0){
        answer = result.toFixed(4);
      } else {
        answer = result;
      }
      console.log(result);
    }
  }

  // Send result back to client
  console.log("The answer is: " + answer);
  theResult = {answer: answer};
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
