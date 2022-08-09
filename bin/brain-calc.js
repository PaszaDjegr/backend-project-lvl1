import readlineSync from 'readline-sync';

console.log('AWhat is the result of the expression?');
for (let i = 0; i < 3; i += 1) {
  const getRandom = (max, min) => Math.floor(Math.random() * (max - min)) + min;
  const arrayOfOperation = ['+', '-', '*'];
  const methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  const number1 = getRandom(200, 1);
  const number2 = getRandom(200, 1);
  const operator = arrayOfOperation[getRandom(arrayOfOperation.length - 1, 0)];
  const result = methods[operator](number1, number2);
  console.log('Question: ', number1, operator, number2);

  const answer = +readlineSync.question('Your answer:').toLowerCase();

  if (answer === result) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`); break;
  }
}
