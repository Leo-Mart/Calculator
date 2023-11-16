let resultField = document.getElementById("numbers-input");
let numbersBtns = document.querySelectorAll(".btn-numbers");
let operatorBtns = document.querySelectorAll(".btn-operators");
let equalBtn = document.querySelector(".btn-equals");

let numberOne;
let numberTwo;
let operator;

resultField.value = "results go here"; // probably display whichever button the user clicked here as well?


// loops through the number buttons to get the one the user clicked on and assign the value to numberOne. Not sure
numbersBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    if (numberOne === undefined) {
      //convert the string from pressing the button to a number
      numberOne = Number(event.target.innerText);
    } else {
      //convert the string from pressing the button to a number
      numberTwo = Number(event.target.innerText);
    }
  });
});

// loops throught the operator buttons to determine which button the user pressed
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    operator = event.target.innerText;
  });
});

// when the user clicks the equal-sign button this will run the calculate function on the numbers the use specified and return the value.
// will also be resetting the variables to be used again.
equalBtn.addEventListener("click", function () {
  resultField.value = calculate(numberOne, numberTwo, operator);
  numberOne = undefined;
  numberTwo = undefined;
  operator = undefined;
});

function calculate(a, b, operator) {
  let result = "";
  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    result = a / b;
  }

  return result;
}


// TODO
// add a clear button and a decimal button to calcualte decimalnumbers
// display the numbers the user enter in the inputfield. clear it when they enter an operator and then show the next number as well
// general styling, since there is nothing at the moment
