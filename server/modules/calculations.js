function calculation(num1, num2, type){
  var result = 0;

  switch (type) {
    case 'add':
      result = num1 + num2;
      console.log("The result is: " + result);
      break;
    case 'subtract':
      result = num1 - num2;
      console.log("The result is: " + result);
      break;
    case 'multiply':
      result = num1 * num2;
      console.log("The result is: " + result);
      break;
    case 'divide':
      result = num1 / num2;
      console.log("The result is: " + result);
      break;
    case 'reset':
      console.log("Clearing data");
  }
  return result;
}
module.exports = calculation;
