// Pede ao usuário para digitar uma data de nascimento no formato "DD/MM/AAAA"
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite uma data de nascimento no formato "DD/MM/AAAA": ', (birthdate) => {
  // Converte a data de nascimento para um objeto Date
  const parts = birthdate.split('/');
  const dob = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);

  // Calcula a idade em anos
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
    age--;
  }

  console.log(`Idade: ${age} anos`);

  readline.close();
});
