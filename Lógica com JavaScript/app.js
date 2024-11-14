alert("Bem-vindo ao jogo de adivinhação");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
// console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
	chute = prompt("Insira um número entre 1 e 100!");

	// se o chute for igual ao número secreto
	if (numeroSecreto == chute) {
		break;
	} else {
		if (chute > numeroSecreto) {
			alert(`O número secreto é menor que ${chute}.`);
		} else {
			alert(`O número secreto é maior que ${chute}.`);
		}
		tentativas++;
	}
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
	`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);

// if (tentativas > 1) {
// 	alert(
// 		`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas.`
// 	);
// } else {
// 	alert(
// 		`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa.`
// 	);
// }
