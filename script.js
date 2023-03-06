// main functions for calculator
let add = function (num1, num2) {
  return num1 + num2;
};
let subtract = function (num1, num2) {
  return num1 - num2;
};
let multiply = function (num1, num2) {
  return num1 * num2;
};

let divide = function (num1, num2) {
  return num1 / num2;
};

let operate = function (operator, num1, num2) {
  if (operator != `+` && operator != `-` && operator != `*` && operator != `/`)
    return;
  else if (operator == `+`) {
    add(num1, num2);
  } else if (operator == `-`) {
    subtract(num1, num2);
  } else if (operator == `*`) {
    multiply(num1, num2);
  } else if (operator == `/`) {
    divide(num1, num2);
  }
};
