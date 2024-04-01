import { useState } from 'react';
import './index.css';
import Button from'./components/Button';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number) => {
    if (operator === "") {
      setFirstNumber(firstNumber + number);
    } else {
      setSecondNumber(secondNumber + number);
    }
  };

  const handleOperatorClick = (operator) => {
    if (firstNumber && secondNumber) {
      calculateResult();
    }
    setOperator(operator);
  };

  const calculateResult = () => {
    const firstNum = parseFloat(firstNumber);
    const secondNum = parseFloat(secondNumber);
    let result;

    switch (operator) {
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "*":
        result = firstNum * secondNum;
        break;
      case "/":
        result = firstNum / secondNum;
        break;
    }

    setResult(result.toString());
    setFirstNumber(result.toString());
    setSecondNumber("");
  };

  const handleClearClick = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult("");
  };

  const handleDeleteClick = () => {
    if (operator === "") {
      setFirstNumber(firstNumber.slice(0, -1));
    } else {
      setSecondNumber(secondNumber.slice(0, -1));
    }
  };

  return (
    <div className="calculator">
      <div className='calcCard'>
        <div className='btnRow'>
          <div className="display">{secondNumber || firstNumber || result}</div>
        </div>
        <div className='btnRow'>
          <Button value="CLEAR" onClick={() => handleClearClick()} className="operBtn"/>
          <Button value="DEL" onClick={() => handleDeleteClick()} className="operBtn" />
        </div>
        <div className='btnRow'>
          <Button value="7" onClick={() => handleNumberClick("7")} />
          <Button value="8" onClick={() => handleNumberClick("8")} />
          <Button value="9" onClick={() => handleNumberClick("9")} />
          <Button value="/" onClick={() => handleOperatorClick("/")} className="operBtn" />
        </div>
        <div className='btnRow'>  
          <Button value="4" onClick={() => handleNumberClick("4")} />
          <Button value="5" onClick={() => handleNumberClick("5")} className="fiveBtn"/>
          <Button value="6" onClick={() => handleNumberClick("6")} />
          <Button value="*" onClick={() => handleOperatorClick("*")} className="operBtn" />
        </div>
        <div className='btnRow'>
          <Button value="1" onClick={() => handleNumberClick("1")} />
          <Button value="2" onClick={() => handleNumberClick("2")} />
          <Button value="3" onClick={() => handleNumberClick("3")} />
          <Button value="-" onClick={() => handleOperatorClick("-")} className="operBtn"/>
        </div>
        <div className='btnRow'>
          <Button value="0" onClick={() => handleNumberClick("0")} className="zeroBtn"/>
          <Button value="=" onClick={() => calculateResult()} className="operBtn"/>
          <Button value="+" onClick={() => handleOperatorClick("+")} className="operBtn"/>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
