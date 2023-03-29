// biblioteca readline do Node.js para interagir com a entrada e saída de dados do terminal
const readline = require('readline');

// Cria uma interface readline para ler dados
const rl = readline.createInterface({
  input: process.stdin, // Define a entrada de dados como o processo do terminal
  output: process.stdout // Define a saída de dados como o processo do terminal
});

// Pergunta ao usuário para digitar um número no terminal e chama uma função de retorno de chamada quando o usuário pressionar Enter
rl.question('Digite um número: ', (numero) => {
  // Verifica se o número é par ou ímpar
  if(numero % 2 === 0) {
    console.log(`${numero} é par`); // Exibe uma mensagem informando que o número é par
  } else {
    console.log(`${numero} é ímpar`); // Exibe uma mensagem informando que o número é ímpar
  }
  
  // Fecha a interface readline
  rl.close();
});
