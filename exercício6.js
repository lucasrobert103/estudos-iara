// as estações do ano são geralmente definidas da seguinte forma:

// Verão: de 21 de dezembro a 20 de março
// Outono: de 21 de março a 20 de junho
// Inverno: de 21 de junho a 20 de setembro
// Primavera: de 21 de setembro a 20 de dezembro

const readline = require('readline');

function getSeason(date) {
  const month = date.getMonth() + 1;
  if (month >= 1 && month <= 3) {
    return 'Verão';
  } else if (month >= 4 && month <= 6) {
    return 'Outono';
  } else if (month >= 7 && month <= 9) {
    return 'Inverno';
  } else {
    return 'Primavera';
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma data no formato DD/MM/AAAA: ', (input) => {
  const [day, month, year] = input.split('/');
  const date = new Date(year, month - 1, day);
  const season = getSeason(date);
  console.log(`A estação do ano no Brasil em ${input} é: ${season}`);
  rl.close();
});
