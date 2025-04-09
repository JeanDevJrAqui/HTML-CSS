let rodada = 1;
while(rodada <= 3){
    console.log("Rodada " + rodada);

let escolhajogador = prompt("Nivel "+rodada+" escolha um vidro de 1 a 3:");
if(escolhajogador >= 1 && escolhajogador <= 3){
let pisoquebrado = Math.floor(Math.random()*3)+1;
    if(escolhajogador == pisoquebrado){
        alert("O piso quebrou, voce perdeu!");
        rodada = 5;
    } else {
        alert("Voce passou, parabéns!");
        if(rodada == 3){
            alert("Parabéns, voce venceu o jogo!");
        }

    }
rodada = rodada + 1;
}
else{
    alert("Número inválido, escolha um, dois ou três!");
}
}