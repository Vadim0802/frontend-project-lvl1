import _ from 'lodash';
import runGameEngine from '../index.js';

const isEven = (number) => number % 2;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const number = _.random(1, 99);
  const rigthAnswer = isEven(number) ? 'yes' : 'no';

  return [number, rigthAnswer];
};

const evenGameStart = () => runGameEngine(rule, getGameData);

export default evenGameStart;
