
function appendToResult(value) {
    const resultInput = document.getElementById('result');
    resultInput.value += value;
  }

  function clearResult() {
    const resultInput = document.getElementById('result');
    resultInput.value = '';
  }
  function deleteCharacter() {
    const resultInput = document.getElementById('result');
    resultInput.value = resultInput.value.slice(0, -1);
  }


  function calculateResult() {
    const resultInput = document.getElementById('result');
    try {
        const expression = resultInput.value.trim() || '0'; // Set default to "0" if the input is empty
        const result = eval(expression);
        resultInput.value = result;
    } catch (error) {
      resultInput.value = 'Error';
    }
    
  }