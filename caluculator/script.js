const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let operand1 = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Handle Clear button
    if (button.id === 'clear') {
      currentInput = '';
      operator = '';
      operand1 = null;
      display.textContent = '0';
      return;
    }
    
    // Handle Equals button
    if (button.id === 'equals') {
      if (currentInput === '' || operator === '' || operand1 === null) return;
      const operand2 = parseFloat(currentInput);
      let result = 0;
      
      // Calculate based on operator
      switch (operator) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
      }
      
      display.textContent = result;
      // Reset for potential chained calculations
      currentInput = result.toString();
      operator = '';
      operand1 = null;
      return;
    }
    
    // Process other buttons with a data-value attribute (digits, decimal, operators)
    const value = button.getAttribute('data-value');
    
    if ('0123456789.'.includes(value)) {
      currentInput += value;
      display.textContent = currentInput;
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput === '') return;
      operand1 = parseFloat(currentInput);
      operator = value;
      currentInput = '';
      display.textContent = operator;
    }
  });
});

