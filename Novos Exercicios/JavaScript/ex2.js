
function soma(){
    let a = Number(prompt("Digite:"))
    let b = Number(prompt("Digite:"))
    alert(a + b)
}

/*function Primo(n) {
    if (n < 2) return false;
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
  
    return true;
  }
  
  let numero = parseInt(prompt("Digite um número para verificar se é primo:"));
  
  if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
  } else {
    if (Primo(numero)) {
      alert(numero + " é um número primo!");
    } else {
      alert(numero + " NÃO é um número primo.");
    }
  }*/

function numero() {
    let respostaCorreta = 8;
    
    for (let tentativas = 1; tentativas <= 40; tentativas++) {
        let chute = Number(prompt("Digite um número e descubra se acertou:"));
    
        if (chute === respostaCorreta) {
        alert("Você acertou!");
        return; 
        } else {
        alert("Errou! Tente novamente.");
        }
    }
}

function cpf(){
    let digit = prompt("Digite o CPF:");
    if (digit.length === 11) {
        alert("CPF válido.");
      } else {
        alert("CPF inválido.");
      }
}

