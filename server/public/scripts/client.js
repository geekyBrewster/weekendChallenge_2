console.log("JS up and Atom!");

$(document).ready(function(){

// Get input from the user
  // Receive numbers from the HTML inputs
  // Receive mathmatical operator from the corresponding button
  // Build an object to transmit data

// Send input to the server -- AJAX post request
$.ajax({
  type: 'POST',
  url: '/math',
  data: {},
  success: function(response){
    console.log("Hi there");
  }
})
;

// After successful AJAX response
  // Receive the result from the server

  // Display the result for the user

// Clear the inputs & reset the calculator





}); //End of doc.ready
