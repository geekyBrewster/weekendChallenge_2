console.log("JS up and Atom!");
var hitEqualSign = false;
var singleNumber = [];
var userNumbers = [];
var userOperators = [];
var mathData = {};

$(document).ready(function(){

// Build a number then push it and math operator to data array
// So long as the user has not pressed the equals sign
if(hitEqualSign !== true){
  // Build number from user's button presses & display on screen
  $('#numbersBox').on('click','button', function(){
    var numberDigit = $(this).text();
    // Make sure button pressed is NOT the equals button
    if(numberDigit !== '='){
      singleNumber.push(numberDigit);
      var currentNumber = singleNumber.join('');
        // console.log("Number is: " + currentNumber);
      $('#numberEntry').text(currentNumber);
    } else {
      $('#numberEntry').text("");
    }

  });
  //get mathmatical operator
  $('#operators').on('click', 'button', function(){
    // Receive mathmatical operator from the corresponding button
      var type = $(this).text().toLowerCase();
      userOperators.push(type);
        console.log("Math operators: " + userOperators);
    // Stop receiving numbers for singleNumber & push it into userNumbers array
      currentNumber = singleNumber.join('');
      userNumbers.push(currentNumber);
      singleNumber = [];
      $('#numberEntry').text('');
        console.log("math data: " + userNumbers);
  });
} //End of if loop that looks for hitEqualSign != true

// User clicks the equals button
$('#submit').on('click', function(){
  hitEqualSign = true;
  $('#inputBox').hide();
  $('#answerBox').show();

  // Push last number to userNumbers array
  currentNumber = singleNumber.join('');
  userNumbers.push(currentNumber);
  singleNumber = [];
  $('#numberEntry').text('');
    console.log("math data: " + userNumbers);

  // Build data object out of numbers and operators arrays
  // Sever will step through the arrays to do the math
  // console.log("You've pressed equals. Ready for an answer?");
  mathData = {
    numberArray: userNumbers,
    operatorArray: userOperators
  };

  // Send input to the server -- AJAX post request
  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: mathData,
    success: function(response){
      console.log("Result received.");
      // Successful AJAX response:
      // Receive the result from the server
      $('#answer').text("Calculating...");
      setTimeout(function(){
        var result = response.answer;
        console.log(result);
        // Display the result for the user
        $('#answer').text(result);
      }, 3000);  
    }
  });

}); // end of equals click function

reset();

}); //end of doc.ready

function reset(){
  $("#reset-btn").on('click', function(){
    $('#answer').text("");
    $('#numberEntry').text("");
    $('#inputBox').show();
    $('#answerBox').hide();
    numCounter = 1;
    hitEqualSign = false;
    singleNumber = [];
    userNumbers = [];
    userOperators = [];
    mathData = {};
    console.log("Data cleared");
  });
}
