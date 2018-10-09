
function changeColor(backgroundColor, couleur){
    console.log("Appel de la fonction changeCouleur");
    var element = document.getElementById("titre");
    element.style.backgroundColor = backgroundColor;
    element.style.color = couleur;
}

var numeroDeSlide = 1;

changerDeSlide(numeroDeSlide);
defilementAutoDeSlide(5000);

function arrow(n) {
    console.log("Appel de la fonction arrow");
    changerDeSlide(numeroDeSlide += n);
}

function changerDeSlide(n) {
    console.log("Appel de la fonction changerDeSlide");
    var nombreDeSlide = document.getElementsByClassName("miniContainerImg");
    var texteDeLaSlide = document.getElementsByClassName("texte");

    if (n > nombreDeSlide.length) {
        numeroDeSlide = 1;
    }else if (n < 1) {
        numeroDeSlide = nombreDeSlide.length;
    }
    for (var i = 0; i < nombreDeSlide.length; i++) {
        nombreDeSlide[i].style.display = "none";
        texteDeLaSlide[i].style.display = "none";
    }
    nombreDeSlide[numeroDeSlide-1].style.display = "block";
    texteDeLaSlide[numeroDeSlide-1].style.display = "block";
}

function defilementAutoDeSlide(tempsEnMS) {
    console.log("Appel de la fonction defilementAutoDeSlide");
    setInterval(function nextSlide() {
        changerDeSlide(numeroDeSlide += 1);
    },tempsEnMS);
}

function numeroSlide(n) {
    console.log("Appel de la fonction numeroSlide");
    numeroDeSlide = parseInt(n);
    changerDeSlide(numeroDeSlide);
}

