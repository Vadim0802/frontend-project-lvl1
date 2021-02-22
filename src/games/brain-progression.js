import _ from 'lodash';
import runGameEngine from '../index.js';

const rule = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (firstElem, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = firstElem + i * step;
  }
  return progression;
};

const getGameData = () => {
  const firstElement = _.random(1, 49);
  const step = _.random(1, 9);
  const progression = getProgression(firstElement, step, progressionLength);
  const hiddenElemIndex = _.random(0, progressionLength - 1);

  const rightAnswer = progression[hiddenElemIndex].toString();
  progression[hiddenElemIndex] = '..';

  const question = progression.join(' ');

  return [question, rightAnswer];
};

const progressionGameStart = () => runGameEngine(rule, getGameData);

export default progressionGameStart;
