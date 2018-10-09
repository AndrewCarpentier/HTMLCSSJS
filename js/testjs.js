var nombre1 = parseInt(prompt("Veuillez saisir le nombre 1"));
console.log(nombre1);
var operation = prompt("taper le type d'operation que vous voulez");
console.log("le type d'operation est '" +operation+ "'");
var nombre2 = parseInt(prompt("Veuillez saisir le nombre 2"));
console.log(nombre1);

if (operation === "+"){
    document.write("nombre1 ( " +nombre1+ " ) + nombre2 ( " +nombre2+ " ) = " +addition(nombre1,nombre2));
} else if(operation === "-"){
    document.write("nombre1 ( " +nombre1+ " ) - nombre2 ( " +nombre2+ " ) = " +soustraction(nombre1,nombre2));
}else if (operation === "*" || operation === "x"){
    document.write("nombre1 ( " +nombre1+ " ) * nombre2 ( " +nombre2+ " ) = " +multiplication(nombre1,nombre2));
}else if(operation === "/"){
    document.write("nombre1 ( " +nombre1+ " ) / nombre2 ( " +nombre2+ " ) = " +division(nombre1,nombre2));
}else{
    console.log("Ce type d'operation n'est pas supporter");
    document.write("Ce type d'operation n'est pas supporter");
}


//FONCTION

function addition(nombre1, nombre2) {
    console.log("appel de la fonction addition");

    var resultadd = (nombre1+nombre2);

    console.log("nombre1 ( " +nombre1+ " ) + nombre2 ( " +nombre2+ " ) = " +resultadd);
    return  resultadd;
}

function soustraction(nombre1, nombre2) {
    console.log("appel de la fonction soustraction");

    var resultsous = (nombre1-nombre2);

    console.log("nombre1 ( " +nombre1+ " ) - nombre2 ( " +nombre2+ " ) = " +resultsous);
    return  resultsous;
}

function multiplication(nombre1, nombre2) {
    console.log("appel de la fonction multiplication");

    var resultmult = (nombre1*nombre2);

    console.log("nombre1 ( " +nombre1+ " ) * nombre2 ( " +nombre2+ " ) = " +resultmult);
    return  resultmult;
}

function division(nombre1, nombre2) {
    console.log("appel de la fonction divison");

    var resultdiv = (nombre1/nombre2);

    console.log("nombre1 ( " +nombre1+ " ) / nombre2 ( " +nombre2+ " ) = " +resultdiv);
    return  resultdiv;
}