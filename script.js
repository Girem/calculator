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
  if (num2 == 0) {
    return;
  } else return num1 / num2;
};

let operate = function (operator, num1, num2) {
  if (operator != `+` && operator != `-` && operator != `*` && operator != `/`)
    return;
  else if (operator == `+`) {
    return add(num1, num2);
  } else if (operator == `-`) {
    return subtract(num1, num2);
  } else if (operator == `*`) {
    return multiply(num1, num2);
  } else if (operator == `/`) {
    return divide(num1, num2);
  }
};

const btn = document.querySelectorAll("button");
const display = document.querySelector(`.display`);
btn.forEach((button) => button.addEventListener(`click`, btnClick));
let num1, num2, operator;
function btnClick(e) {
  const BtnName = e.target.getAttribute("data-name");
  const btnOperator = e.target.getAttribute(`data-operator`);
  const BtnFunction = e.target.getAttribute("data-function");
  const btnEquality = e.target.getAttribute("data-equality");
  let content = display.textContent;
  // clearing and deleting buttons
  if (BtnFunction == `clear`) {
    display.textContent = ``;
  } else if (BtnFunction == `delete`) {
    display.textContent = content.slice(0, -1);
  }
  // `.` problem solution
  if (content.includes(`.`)) {
    let btnDot = document.querySelector(".btn-dot");
    btnDot.removeAttribute(`data-name`);
    // change after operator appears
  }
  if (BtnName) {
    display.textContent += BtnName;
  }
  if (btnOperator) {
    operator = btnOperator;
    display.textContent += btnOperator;
    console.log(operator);
    // num2 = content.slice(num1.length + 1);

    // console.log(content, num2);
  }
  if (btnEquality) {
    let string = content;
    let parts = string.split(operator);
    num1 = +parts[0];
    num2 = +parts[1];
    console.log(operator, parts[0], parts[1]);
    console.log(operate(operator, num1, num2));
    display.textContent = operate(operator, num1, num2);
  }

  // operate(operator, num1, num2);
}
