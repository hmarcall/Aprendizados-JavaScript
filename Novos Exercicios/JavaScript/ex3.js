function jogo(){
    let digit = prompt("1 - Soco, 2 - Chute, 3 - Guarda, 4 - Esquiva, 5 - Sair:");
    switch(digit){
        case "1":
            alert("Você usou o soco!");
            break;
        case "2":
            alert("Você usou o chute!");
            break;
        case "3":
            alert("Você usou a guarda!");
            break;
        case "4":
            alert("Você usou a esquiva!");
            break;
        case "5":
            alert("Você saiu do jogo!");
            break;
        default:
            alert("Opção inválida!");
            break;
    }
}

function idade(){
    let idade = prompt("Digite a sua idade:");
    let resultado = idade < 12 ? "Você é uma criança!" : idade < 18 ? "Você é um adolescente!" : idade < 60 ? "Você é um adulto!" : "Você é um idoso!";
    alert(resultado);
}