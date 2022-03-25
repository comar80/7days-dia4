// sorteia o número
// var numeroSecreto = parseInt(Math.random() * 101);
//                                              max  min      min
var numeroSecreto = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(numeroSecreto);

// elementos html
var elementoResultado = document.getElementById("resultado");
var elementoTentativa = document.getElementById("tentativa");

var contador = 0;

elementoTentativa.innerHTML = "Você tem 10 tentativas";

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value); // pega o número digitado

  contador++;

  //condição inicial para jogar
  if (contador >= 10) {
    elementoResultado.innerHTML = "Você errou. Suas tentativas acabaram";
    elementoTentativa.innerHTML =
      "<input type='button' value='Tentar Novamente' onClick='document.location.reload(true)'>";
    //desabilita o botão chutar
    document.getElementById("chutar").disabled = true;
  } else if (chute > 100 || chute < 1) {
    elementoResultado.innerHTML = "Digite um número de 1 a 100";
    elementoTentativa.innerHTML =
      "Você tem " + (10 - contador) + " tentativas sobrando";
  } else if (numeroSecreto > chute) {
    elementoResultado.innerHTML = "Você errou. O número é maior";
    elementoTentativa.innerHTML =
      "Você tem " + (10 - contador) + " tentativas sobrando";
  } else if (numeroSecreto < chute) {
    elementoResultado.innerHTML = "Você errou. O número é menor";
    elementoTentativa.innerHTML =
      "Você tem " + (10 - contador) + " tentativas sobrando";
  } else {
    elementoResultado.innerHTML = "Acertou!";
    elementoTentativa.innerHTML =
      "<input type='button' value='Jogar Novamente' onClick='document.location.reload(true)'>";
    //desabilita o botão chutar
    document.getElementById("chutar").disabled = true;
  }

  //limpa o valor do input
  document.getElementById("valor").value = "";
}