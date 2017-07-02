console.log("JS up and Atom!");
var mathData = {};

$(document).ready(function(){

// Get input from the user
  // Receive numbers from the HTML inputs
  $('button').on('click', function(){
    var num1 = $('#number1').val();
    var num2 = $('#number2').val();
    console.log("Numbers entered: " + num1 + ", " + num2);

    // Receive mathmatical operator from the corresponding button
    var operator = $(this).text().toLowerCase();
    console.log("Math operator: " + operator);

    // Build an object to transmit data
    mathData = {
      number1: num1,
      number2: num2,
      type: operator
    };
    console.log(mathData);

    // Send input to the server -- AJAX post request
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: mathData,
      success: function(response){
        console.log("Result received.");
        // Successful AJAX response:
        // Receive the result from the server
        var result = response.answer;
        console.log(result);
        // Display the result for the user
        $('#result').text(result);
      }
    });
  });

// Clear the inputs & reset the calculator





}); //End of doc.ready
