// primeiro desafio
console.log("Boas-vindas!");

// segundo desafio
let nome = "José";
console.log(`Bem-vindo, ${nome}!`);

// terceiro desafio
alert(`Bem-vindo, ${nome}!`);

// quarto desafio
let linguagemPreferida = prompt(
	"Qual a linguagem de programação que você mais gosta?"
);
console.log(linguagemPreferida);

// quinto desafio
let valor1 = 5;
let valor2 = 6;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// sexto desafio
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// sétimo desafio
let idade = prompt("Insira sua idade:");
if (idade >= 18) {
	console.log("Você é maior de idade!");
} else {
	console.log("Você não é maior de idade!");
}

// oitavo desafio
let numero = prompt("Insira um número:");
if (numero > 0) {
	console.log(`${numero} é positivo.`);
} else if (numero < 0) {
	console.log(`${numero} é negativo.`);
} else {
	console.log(`${numero} é 0.`);
}

// nono desafio
numero = 1;
while (numero <= 10) {
	console.log(numero);
	numero++;
}

// décimo desafio
let nota = 7.5;
if (nota > 7) {
	console.log("Aprovado");
} else {
	console.log("Reprovado");
}

// décimo-primeiro desafio
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// décimo-segundo desafio
numeroAleatorio = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio);

// décimo-terceiro desafio
numeroAleatorio = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio);
