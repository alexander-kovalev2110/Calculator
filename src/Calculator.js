import { useState } from 'react';

import { Calc, CalcCard, BtnRow, Display, Btn, OperBtn, FiveBtn, ZeroBtn } from './components/styled-components'

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (event) => {
    const number = event.target.innerText;
    if (operator === "") {
      setFirstNumber(firstNumber + number);
    } else {
      setSecondNumber(secondNumber + number);
    }
  };

  const handleClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult("");
  };
  
  const handleDelete = () => { 
    if (operator === "") {
      setFirstNumber(firstNumber.slice(0, -1));
    } else {
      setSecondNumber(secondNumber.slice(0, -1));
    }
  };

  const handleOperator = (event) => {
    const operator = event.target.innerText;    
    if (firstNumber && secondNumber) {
      calculateResult();
    }
    setOperator(operator);
  };

  const calculateResult = () => {
    if (firstNumber && secondNumber) {
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
    }
  };

  return (
    <Calc>
      <CalcCard>
        <BtnRow>
          <Display>{secondNumber || firstNumber || result}</Display>
        </BtnRow>
        <BtnRow>
          <OperBtn onClick={handleClear}>CLEAR</OperBtn>
          <OperBtn onClick={handleDelete}>DEL</OperBtn>
        </BtnRow>
        <BtnRow>
          <Btn onClick={handleNumber}>7</Btn>
          <Btn onClick={handleNumber}>8</Btn>
          <Btn onClick={handleNumber}>9</Btn>
          <OperBtn onClick={handleOperator}>/</OperBtn>
        </BtnRow>
        <BtnRow>  
          <Btn onClick={handleNumber}>4</Btn>
          <FiveBtn onClick={handleNumber}>5</FiveBtn>
          <Btn onClick={handleNumber}>6</Btn>
          <OperBtn onClick={handleOperator}>*</OperBtn>
        </BtnRow>
        <BtnRow>
          <Btn onClick={handleNumber}>1</Btn>
          <Btn onClick={handleNumber}>2</Btn>
          <Btn onClick={handleNumber}>3</Btn>
          <OperBtn onClick={handleOperator}>-</OperBtn>
        </BtnRow>
        <BtnRow>
          <ZeroBtn onClick={handleNumber}>0</ZeroBtn>
          <OperBtn onClick={calculateResult}>=</OperBtn>
          <OperBtn onClick={handleOperator}>+</OperBtn>
        </BtnRow>
      </CalcCard>
    </Calc>
  );
};

export default Calculator;
