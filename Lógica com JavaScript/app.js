alert("Bem-vindo ao jogo de adivinhação");
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute = prompt("Insira um número entre 1 e 30!");

// se o chute for igual ao número secreto
if (numeroSecreto == chute) {
	alert(`Você acertou o número secreto ${numeroSecreto}`);
} else {
	alert("Você errou!");
}
