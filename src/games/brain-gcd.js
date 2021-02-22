import { random } from 'lodash';
import runGameEngine from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => (y === 0 ? x : findGcd(y, x % y));

const getGameData = () => {
  const num1 = random(1, 99);
  const num2 = random(1, 99);

  const question = `${num1} ${num2}`;
  const rigthAnswer = findGcd(num1, num2).toString();

  return [question, rigthAnswer];
};

const gcdGameStart = () => runGameEngine(rule, getGameData);

export default gcdGameStart;
