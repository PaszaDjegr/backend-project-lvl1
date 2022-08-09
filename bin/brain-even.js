import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * (100 - 1)) + 1;
  console.log(number);
  const answer = readlineSync.question('Your answer:').toLowerCase();

  const isEven = number % 2 === 0;

  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    console.log('Correct!');
  } else if (answer === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill"); break;
  } else {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, Bill"); break;
  }
}
