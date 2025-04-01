idade = prompt("Qual a sua idade?");
if(idade < 18){
    alert("você não pode jogar jokenpo");
}
if(idade >= 18){
    escolhajogador = prompt("Digite 1-pedra 2-papel 3-tesoura");
    escolhapc = Math.floor(Math.random() * 3 ) + 1;

    if(escolhajogador == escolhapc){
        alert("Voce escolheu: " + escolhajogador + ". O PC escolheu :" + escolhapc + ".  Deu empate!");
    } else if(escolhajogador == 1 && escolhapc == 2){
        alert("Voce escolheu: " + escolhajogador + ". O PC escolheu :" + escolhapc + ".  PC venceu!");
    }else if(escolhajogador == 2 && escolhapc == 3){
        alert("Voce escolheu: " + escolhajogador + ". O PC escolheu :" + escolhapc + ".  PC venceu!");
    }else if(escolhajogador == 3 && escolhapc == 1){
        alert("Voce escolheu: " + escolhajogador + ". O PC escolheu :" + escolhapc + ".  PC venceu!");
    }else if(escolhajogador == 1 && escolhapc == 3){
        alert("Voce escolheu: " + escolhajogador + ". O PC escolheu :" + escolhapc + ".  Voce venceu!");
    }else if(escolhajogador == 2 && escolhapc == 1){
        alert("Voce escolheu: " + escolhajogador + ". O PC escolheu :" + escolhapc + ".  Voce venceu!");
    }else if(escolhajogador == 3 && escolhapc == 2){
        alert("Voce escolheu: " + escolhajogador + ". O PC escolheu :" + escolhapc + ".  Voce venceu!");
    }

}