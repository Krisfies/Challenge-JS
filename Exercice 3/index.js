let nbquestions = 6;		//le nombre de questions
let reponse = new Array(6);	//le nombre de réponses
reponse[0] = "Faux";
reponse[1] = "Terre";//les réponses (en partant de 0)
reponse[2] = "Faux";
reponse[3] = "Faux";
reponse[4] = "Mars";
reponse[5] = "Uranus";

function correction() {
let score = 0;
    for (let i=0; i<nbquestions; i++) {
        let proposition = document.getElementsByName("prop");
        input_prop = proposition[i];
        if (input_prop.value == reponse[i]) {
            let image_vrai = document.getElementsByName("vrai");
            img_vrai = image_vrai[i];
            img_vrai.style.display="inline";//affiche l'image "vrai"
            if (input_prop.checked) {
            score++;	//augmente le score d'1 point
            }
        }
        else {
            let images_faux = document.getElementsByName("faux");
            img_faux = images_faux[i]
            img_faux.style.display="inline";//affiche l'image "faux"
        }
    }
    document.getElementById("total").value= score+"/"+nbquestions;//affiche le score dans le boutton "total"
    for (let i=0; i<nbquestions; i++) {
        let proposition = document.getElementsByName("prop");
        input_prop = proposition[i];
        imput_prop.disabled = true;//empêche la modification des données des boutons "prop"
    }
}

function efface() {
        location.reload();//recharge la page
        return(false);
}