personagem = ["","",""];
viloes = ["","",""];
forcap = 0;
forcav = 0;

for(let i = 0; i < 3; i++){
    escolhapersonagem = prompt("Digite o nome do personagem: " + (i + 1));
    personagem[i] = escolhapersonagem;
    indicealeatorio = Math.floor(Math.random() * 10);
    grupoviloes = ["Voldemort","Darth Vader","Joker(Coringa)","Sauron","Madara","Frieza","Aizen","Meruem","Kaidou","Light"]
    viloes[i] = grupoviloes[indicealeatorio];
    forcap = forcap + Math.floor(Math.random()*10) + 1;
    //forcap += Math.floor(Math.random()*10) + 1;   faz o mesmo que o de cima
    forcav = forcav + Math.floor(Math.random()*10) + 1;


    /*escolhaviloes = prompt("Digite o nome do vilao: " + (i + 1)); para ser escolhido pelo jogador
    viloes[i] = escolhaviloes;*/
}

alert("Agora o personagem contem: "+personagem+". E o vilão contem: "+viloes);

if(forcap > forcav){
    alert("Parabéns, você ganhou, seu time era mais forte, sua força foi de: "+forcap+" e a dos vilões era de: "+forcav);
} else if(forcap < forcav){
    alert("Sinto muito, você perdeu, seu time era mais fraco, sua força foi de: "+forcap+" e a dos vilões era de: "+forcav);
} else{
    alert("Eita, deu empate, sua força foi de: "+forcap+" e a dos vilões era de: "+forcav);
}