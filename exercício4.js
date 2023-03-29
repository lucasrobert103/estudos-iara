const numero1 = process.argv[2];
const numero2 = process.argv[3];
const numero3 = process.argv[4];

const media = (parseInt(numero1) + parseInt(numero2) + parseInt(numero3)) / 3;

console.log(`A média dos números é: ${media}`);
