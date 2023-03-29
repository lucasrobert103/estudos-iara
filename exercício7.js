const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    const max = Math.max(parseFloat(num1), parseFloat(num2));
    console.log(`O maior número entre ${num1} e ${num2} é: ${max}`);
    rl.close();
  });
});
