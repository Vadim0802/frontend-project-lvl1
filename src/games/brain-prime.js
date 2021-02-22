import _ from 'lodash';
import runGameEngine from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const number = _.random(1, 99);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [number.toString(), rightAnswer];
};

const primeGameStart = () => runGameEngine(rule, getGameData);

export default primeGameStart;
