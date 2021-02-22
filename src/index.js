import readlineSync from 'readline-sync';

const amountTries = 3;
const print = (output) => console.log(output);

const runGameEngine = (rule, gameData) => {
  print('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  print(`Hello, ${name}!`);
  print(rule);

  for (let i = 0; i < amountTries; i += 1) {
    const [task, rightAnswer] = gameData();
    print(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rightAnswer) {
      print(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      print(`Let's try again, ${name}!`);
      return;
    }
    print('Correct!');
  }
  print(`Congratulations, ${name}!`);
};

export default runGameEngine;
