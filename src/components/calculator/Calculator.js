import React, { Fragment } from 'react';
import classes from '../css/Calculator.module.css';

const Calculator = () => (
  <>
    <div className={classes.calculator}>
      <div className={classes.display}>0</div>
      <button type="button">ac</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className={classes.operator}>/</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className={classes.operator}>*</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className={classes.operator}>-</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className={classes.operator}>+</button>
      <button type="button" className={classes.zero}>0</button>
      <button type="button">.</button>
      <button type="button" className={classes.equal}>=</button>
    </div>
  </>
);

export default Calculator;
