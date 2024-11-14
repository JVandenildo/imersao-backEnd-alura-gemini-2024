alert("Bem-vindo ao jogo de adivinhação");
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
	chute = prompt("Insira um número entre 1 e 30!");

	// se o chute for igual ao número secreto
	if (numeroSecreto == chute) {
		alert(
			`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`
		);
	} else {
		if (chute > numeroSecreto) {
			alert(`O número secreto é menor que ${chute}.`);
		} else {
			alert(`O número secreto é maior que ${chute}.`);
		}
		tentativas++;
	}
}
