let nbquestions = 6;		//le nombre de questions
let reponse = "Youri Gagarine";	//le nombre de réponses

function correction() {
    let score = 0;
    for (let i=0; i<nbquestions; i++) {
        let proposition = document.getElementsByName("prop");
        input_prop = proposition[i];
        if (input_prop.checked && input_prop.value == reponse) {
            let image_vrai = document.getElementsByName("vrai");
            img_vrai = image_vrai[i];
            img_vrai.style.display="inline";//affiche l'image "vrai"
            score++;	//augmente le score d'1 point
        }
        else if (input_prop.value == reponse && !input_prop.checked) {
            let image_vrai = document.getElementsByName("vrai");
            img_vrai = image_vrai[i];
            img_vrai.style.display="inline";//affiche l'image "vrai"
        } else {
            let images_faux = document.getElementsByName("faux");
            img_faux = images_faux[i]
            img_faux.style.display="inline";//affiche l'image "faux"
        }
    } 
    document.getElementById("total").value=score+"/1";//affiche le score dans le boutton "total"
    document.getElementById("suivant").style.display="inline"
    for (let i=0; i<nbquestions; i++) {
        let proposition = document.getElementsByName("prop");
        input_prop = proposition[i];
        input_prop.disabled = true;//empêche la modification des données des boutons "prop"
        let bouton_suivant = document.getElementById("suivant");
        bouton_suivant.style.display="inline";
    }
}

function efface() {
        location.reload();//recharge la page
        return(false);
}