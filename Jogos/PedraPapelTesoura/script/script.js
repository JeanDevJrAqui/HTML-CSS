let idade = prompt("Qual a sua idade?");
if(idade < 18){
    alert("você não pode jogar jokenpo");
}
if(idade >= 18){
    let escolhajogador = prompt("Digite 1-pedra 2-papel 3-tesoura");
    let escolhapc = Math.floor(Math.random() * 3 ) + 1;
        if(escolhajogador > 3 || escolhajogador < 1){
            alert("Voce escolheu um valor inválido!");
        }
    if(escolhajogador == escolhapc){
        alert("Voce escolheu: " + escolhajogador + ". O PC escolheu :" + escolhapc + ".  Deu empate!");
    } else if(escolhajogador == 1 && escolhapc == 2){
        alert("Voce escolheu: " + escolhajogador + "-Pedra. O PC escolheu :" + escolhapc + "-Papel.  PC venceu!");
    }else if(escolhajogador == 2 && escolhapc == 3){
        alert("Voce escolheu: " + escolhajogador + "-Papel. O PC escolheu :" + escolhapc + "-Tesoura.  PC venceu!");
    }else if(escolhajogador == 3 && escolhapc == 1){
        alert("Voce escolheu: " + escolhajogador + "-Tesoura. O PC escolheu :" + escolhapc + "-Pedra.  PC venceu!");
    }else if(escolhajogador == 1 && escolhapc == 3){
        alert("Voce escolheu: " + escolhajogador + "-Pedra. O PC escolheu :" + escolhapc + "-Tesoura.  Voce venceu!");
    }else if(escolhajogador == 2 && escolhapc == 1){
        alert("Voce escolheu: " + escolhajogador + "-Papel. O PC escolheu :" + escolhapc + "-Pedra.  Voce venceu!");
    }else if(escolhajogador == 3 && escolhapc == 2){
        alert("Voce escolheu: " + escolhajogador + "-Tesoura. O PC escolheu :" + escolhapc + "-Papel.  Voce venceu!");
    }

}