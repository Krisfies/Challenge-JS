// Déclaration des variables
let input = document.querySelector('.inputValue');
let Name = document.querySelector('.Name');
let temp = document.querySelector('.température');
let climat = document.querySelector('.weather');
let submit = document.querySelector('.submit');

submit.addEventListener('click', function(){
// Récupération de l'URL
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=bef439a3f93c4d22911357cd6adf7365&units=metric&lang=fr')
// On récupère la structure en format JSON
.then(response => response.json())
// On recupère seulement les informations utiles de la strucure
.then(data => {
  let nameValue = data.name;
  let tempValue = "Température : "+Math.trunc(data.main.temp)+" °C";
  let climatValue = "Climat : "+data.weather[0].description;
  Name.innerHTML = nameValue;
  climat.innerHTML = climatValue;
  temp.innerHTML = tempValue;
  input.value ="";
})
// Gestion d'erreurs
.catch(error=>{Name.innerHTML = "Cette ville n'existe pas !";
	});
})
