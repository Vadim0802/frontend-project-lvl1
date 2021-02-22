import { random } from 'lodash';
import runGameEngine from '../index.js';

const rule = 'What is the result of the expression?';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const operations = ['+', '-', '*'];

const getGameData = () => {
  const num1 = random(1, 49);
  const num2 = random(1, 49);

  const idx = random(0, operations.length - 1);
  const operation = operations[idx];

  const task = `${num1} ${operation} ${num2}`;
  const rightAnswer = calculate(num1, num2, operation);

  return [task, rightAnswer.toString()];
};

const calcGameStart = () => runGameEngine(rule, getGameData);

export default calcGameStart;
