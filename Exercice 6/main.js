// Déclarations des variables
let Jordan_Price_Display = document.querySelector('.Jordan_Price');
let Jordan_Quantity_Display = document.querySelector('.Jordan_Quantity');
let Supreme_Price_Display = document.querySelector('.Supreme_Price');
let Supreme_Quantity_Display = document.querySelector('.Supreme_Quantity');
let Metallic_Price_Display = document.querySelector('.Metallic_Price');
let Metallic_Quantity_Display = document.querySelector('.Metallic_Quantity');
let Jordan_Price = 0;
let Jordan_Quantity = 0;
let Supreme_Price = 0;
let Supreme_Quantity = 0;
let Metallic_Price = 0;
let Metallic_Quantity = 0;

// On retourne l'image de la paire
function back(nombre) {
    numero = String(nombre)
    image = document.getElementById("Img"+numero)
    if (image.src == "http://127.0.0.1:5500/Exercice%206/Images/article_"+numero+"_front.jpg") {
        image.src="../Images/article_"+numero+"_back.jpg"
    } else if (image.src == "http://127.0.0.1:5500/Exercice%206/Images/article_"+numero+"_back.jpg") {
        image.src="../Images/article_"+numero+"_front.jpg"
    }
}

// Ajoute une paire de chaussures selon la paire choisis
function add(sneaker) {
    if (sneaker == "Jordan") {
        Jordan_Price = Jordan_Price + 545;
        Jordan_Quantity = Jordan_Quantity + 1;
        Jordan_Price_Display.innerHTML = "Prix : "+Jordan_Price+"€";
        Jordan_Quantity_Display.innerHTML = "Quantité : "+Jordan_Quantity;
    }  else if (sneaker == "Supreme") {
        Supreme_Price =  Supreme_Price + 250;
        Supreme_Quantity = Supreme_Quantity + 1;
        Supreme_Price_Display.innerHTML = "Prix : "+ Supreme_Price+"€";
        Supreme_Quantity_Display.innerHTML = "Quantité : "+ Supreme_Quantity;
    } else if (sneaker == "Metallic") {
        Metallic_Price = Metallic_Price + 200;
        Metallic_Quantity = MetallicQuantity + 1
        Metallic_Price_Display.innerHTML = "Prix : "+ Metallic_Price+"€";
        Metallic_Quantity_Display.innerHTML = "Quantité : "+ Metallic_Quantity;
    }
}
