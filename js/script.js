const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const joueur = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random()*buttons.length)].innerHTML;
let resultat = '';
    if (joueur === robot) {
        resultat = 'égalité';
    }else if ((joueur === 'pierre' && robot === "ciseaux") || (joueur 
        === 'feuille' && robot === "pierre") || (joueur === 'ciseaux' 
        && robot === "feuille")) {
        resultat = 'gagné';
    }
     else if((joueur === "puit" && robot === "ciseaux") || (joueur === "puit"
     && robot === "pierre")){
        resultat = "gagné avec la technique secrète";
     }   
    else {
        resultat = 'perdu';
    }

    document.querySelector(".resultat").innerHTML =
    `Joueur : ${joueur}<br>
    Robot : ${robot}<br>
    ${resultat} !!!`;
        
    //console.log(joueur, robot);
  });
}