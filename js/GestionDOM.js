/*
function changeCouleur(newCouleur) {
    console.log("Appel de la fonction changeCouleur");
    var element = document.getElementById('titre');
    element.style.color = newCouleur;
}


var titre = document.getElementById('titre').innerHTML;

console.log(titre);
//alert(titre);


function ajoutListeLangages(){
    console.log("Appel de la fonction ajoutListeLangages");
    document.getElementById("langages").innerHTML += '<li id="c">C</li>';
}

function disable(id) {
    document.getElementById(id).disabled = true;
    document.getElementById(id+"Enable").disabled = false;
}

function enable(id) {
    document.getElementById(id).disabled = false;
    document.getElementById(id+"Enable").disabled = true;
}

var titreClass = document.getElementsByClassName('button');
console.log(titreClass);

console.log(titreClass[0].innerHTML);
console.log(titreClass[1].innerHTML);
console.log(titreClass[2].innerHTML);


var mesTitre = document.getElementsByClassName('name');
for (i = 0 ; i < mesTitre.length ; i++ ){
    mesTitre[i].innerHTML = "Titre à l'indice "+i;
}

var h3 = document.getElementsByTagName("h3");
for (var i = 0 ; i < h3.length ; i++) {
    h3[i].innerHTML = "Nouveau titre h3";
}
*/
var h1 = document.getElementsByTagName("h1");
h1[0].innerHTML = "Gestion des utilisateurs";
var titreTableau = document.getElementById("titreTableau");
titreTableau.innerHTML = "Liste des utilisateurs";
var td = document.getElementsByTagName("td");
td[6].innerHTML = "John";

