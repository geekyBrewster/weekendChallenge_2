# Calculator Application

Welcome to your second weekend challenge!

**We are going to be building a calculator application using jQuery, Node, and Express!!**

Basic Tasks:
- [x] Build 2 input fields and buttons for mathematical operators
- [x] Accept input from the user: 2 numbers as inputs, math operator by button
- [x] Convert input into an array like { x: 3, y: 4, type: "Add" }
- [x] Send data object to the server side via an AJAX POST request
- [x] Built logic on server side to compute the math using the user's numbers
- [x] After calculation, the answer should be sent back to the client
- [x] Display the answer on the DOM
- [x] Finally, build a 'clear' button that resets the whole experience.

__HARD MODE:__
- [x] Convert input fields to Buttons 1-9
- [x] Build an equal button that sends all of the information to the server.
- [x] Construct data object to send to the server
- [x] Use existing calculation function to find the answer
- [x] Display the answer on the DOM
- [ ] Prevent user from clicking multiple math operations (all of which enter array currently)

__PRO MODE:__
- [x] Create a delay from when the client receives the response from the Server, and when the calculation is actually displayed on the DOM.
- [x] The delay should be 3 seconds.
- [x] During that delay, show information that says 'computing' until the 3 second delay has finished
- [x] then remove the 'computing' message while showing the calculation.
