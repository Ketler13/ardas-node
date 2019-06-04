const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('How are you?', answer => {
  const ourAnswer = answer === 'ok' ? 'We are so happy =)' : 'We are so sad =(';
  rl.write(ourAnswer);
  rl.close();
})
