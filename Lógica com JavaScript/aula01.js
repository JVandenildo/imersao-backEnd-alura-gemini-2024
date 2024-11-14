alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let saldoDisponivel = 50;

alert("Erro! Preencha todos os campos");
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

nome = prompt("Digite seu nome:");
idade = prompt("Digite sua idade:");
if (idade >= 18) {
	alert("Pode tirar a habilitação!");
}
