// Pede ao usuário para digitar uma data no formato "DD/MM/AAAA"
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite uma data no formato "DD/MM/AAAA": ', (date) => {
  // Converte a data para um objeto Date
  const parts = date.split('/');
  const d = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);

  // Calcula o número de dias desde o início do ano
  const startOfYear = new Date(d.getFullYear(), 0, 1);
  const diff = (d - startOfYear) / (1000 * 60 * 60 * 24);

  console.log(`Dias desde o início do ano: ${diff}`);

  readline.close();
});
