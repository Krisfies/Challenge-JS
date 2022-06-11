// On définit les variables
let banque = document.querySelector('.banque');
let jetons = 500;
let Casino_Liste = ["Diamant","Citron","Jackpot","Cerise","Diamant","Citron","Cerise"]

// On affiche le nombre de jetons restants
banque.innerHTML = "Vous avez : "+jetons+" 💰";

// Prends un nombre entier aléatoire
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// Fonction servant à eviter les répétition 
function gain(mise,multiple_mise) {
    mise = mise * multiple_mise
    jetons = jetons + mise
    banque.innerHTML ="Vous avez : "+jetons+" 💰";
}

// Change les images du casino pour correspondre au resultat de notre essai
function image(liste,numero) {
    if (liste[numero]=="Diamant") {
        document.getElementById("img"+String(numero+1)).src="Images/diamond.png"
    } else if  (liste[numero]=="Citron") {
        document.getElementById("img"+String(numero+1)).src="Images/lemon.png"
    } else if  (liste[numero]=="Cerise") {
        document.getElementById("img"+String(numero+1)).src="Images/cherry.png"
    } else if  (liste[numero]=="Jackpot") {
        document.getElementById("img"+String(numero+1)).src="Images/casino.png"
    }
}

function Casino(mise) {
    // Gestion d'erreur si la mise est plus grande que le nombre de jetons ou si le joueur n'a plus de jeton
    if (jetons<mise) {
        return
    }
    if (jetons<0) {
        return
    }
    // On enlève le prix de la partie au joueur
    jetons = jetons - mise
    banque.innerHTML = "Vous avez : "+jetons+" 💰";
    // On génère aléatoirement la partie
    let Play_Liste = ["","",""];
    for (let i = 0; i < 3; i++) {
        Play_Liste[i] = Casino_Liste[getRandomInt(7)]
      }
    // On affiche le résultat de la partie
    image(Play_Liste,0)
    image(Play_Liste,1)
    image(Play_Liste,2)
    // On verifie si le joueur a gagné des jetons
    let Diamant_Index = 0 ;
    let Cerise_Index = 0 ;
    let Citron_Index = 0 ;
    let Jackpot_Index = 0 ;
    for (let i = 0; i < 3; i++) {
        if (Play_Liste[i]=="Diamant") {
            Diamant_Index = Diamant_Index +1
        } else if (Play_Liste[i]=="Cerise") {
            Cerise_Index = Cerise_Index +1
        } else if (Play_Liste[i]=="Citron") {
            Citron_Index = Citron_Index +1
        } else if (Play_Liste[i]=="Jackpot") {
            Jackpot_Index = Jackpot_Index +1
        }
      }
    // On répartie les jetons obtenus
    if (Diamant_Index == 1) {
        gain(mise,0.5)
        return 
    }
    if (Diamant_Index == 2) {
        gain(mise,1)
        return 
    }
    if (Diamant_Index == 3) {
        gain(mise,2.5)
        return 
    }
    if (Citron_Index == 3) {
        gain(mise,1.25)
        return 
    }
    if (Cerise_Index == 3) {
        gain(mise,1.5)
        return 
    }
    if (Jackpot_Index == 3) {
        gain(mise,10)
        return 
    }
}