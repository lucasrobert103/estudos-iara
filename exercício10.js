// Pede ao usuário para digitar um valor como parâmetro
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um valor: ', (value) => {
  // Converte o valor para um número inteiro
  value = parseInt(value);

  // Gera números inteiros aleatórios e conta quantos foram gerados
  let count = 0;
  for (let i = 0; i < value; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    count++;
  }

  console.log(`Foram gerados ${count} números inteiros aleatórios`);

  readline.close();
});
