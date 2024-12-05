let display = document.getElementById('display');
let buttons = document.querySelectorAll('.buttons button');
let firstOperand = '';
let operator = '';
let secondOperand = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent;

    if (value >= '0' && value <= '9' || value === '.') {
      if (operator === '') {
        firstOperand += value;
        display.value = firstOperand;
      } else {
        secondOperand += value;
        display.value = secondOperand;
      }
    } else if (value === 'C') {
      firstOperand = '';
      operator = '';
      secondOperand = '';
      display.value = '';
    } else if (value === '&larr;') {
      if (operator === '') {
        firstOperand = firstOperand.slice(0, -1);
        display.value = firstOperand;
      } else {
        secondOperand = secondOperand.slice(0, -1);
        display.value = secondOperand;
      }
    } else if (['+', '-', '&times;', '&divide;', '%'].includes(value)) {
      operator = value;
      display.value = operator;
    } else if (value === '=') {
      if (operator === '%') {
        let result = modulus(parseFloat(firstOperand), parseFloat(secondOperand));
        display.value = result;
        firstOperand = result.toString();
        operator = '';
        secondOperand = '';
      } else {
        let result = eval(firstOperand + operator + secondOperand);
        display.value = result;
        firstOperand = result.toString();
        operator = '';
        secondOperand = '';
      }
    }
  });
});

function modulus(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero is not allowed";
  } else {
    return num1 % num2;
  }
}