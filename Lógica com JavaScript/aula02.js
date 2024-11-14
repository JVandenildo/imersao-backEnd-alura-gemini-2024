let diaDaSemana = prompt("Qual o dia da semana?");

if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
	alert("Bom dim de semana!");
} else {
	alert("Boa semana!");
}

// segundo desafio
let numero = prompt("Digite um número:");
if (numero > 0) {
	alert("O número é positivo.");
} else if (numero < 0) {
	alert("Número é negativo.");
} else {
	alert("Número é 0.");
}

// terceiro desafio
let pontosJogador = 75;
if (pontosJogador >= 100) {
	alert("Parabéns, você venceu!");
} else {
	alert("Tente novamente para ganhar.");
}

// quarto desafio
let saldoConta = 75;
alert(`O saldo da sua conta é ${saldoConta}.`);

// quinto desafio
let nome = prompt("Digite seu nome:");
alert(`Boas-vindas a ${nome}!`);
