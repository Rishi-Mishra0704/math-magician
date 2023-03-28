import React, { useState } from 'react';
import classes from '../css/Calculator.module.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const displayValue = calculatorData.next || calculatorData.total || '0';

  return (
    <>
      <div className={classes.calculator}>
        <div className={classes.display}>{displayValue}</div>
        <button type="button" onClick={() => handleClick('AC')}>ac</button>
        <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
        <button type="button" className={classes.operator} onClick={() => handleClick('÷')}>÷</button>
        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" className={classes.operator} onClick={() => handleClick('x')}>x</button>
        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" className={classes.operator} onClick={() => handleClick('-')}>-</button>
        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" className={classes.operator} onClick={() => handleClick('+')}>+</button>
        <button type="button" className={classes.zero} onClick={() => handleClick('0')}>0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
        <button type="button" className={classes.equal} onClick={() => handleClick('=')}>=</button>
      </div>
    </>
  );
};

export default Calculator;
