
// var nombreBoucle = parseInt(prompt("Nombre de boucle souhaitez"));
// var bonjour = "bonjour";
//var tableauNombre = ["Un","Deux","Trois","Quatre","Cinq","Six","Sept","Huit","Neuf","Dix"];

/*
for(var i = 0;i<nombreBoucle;i++){
    console.log("<h1>i = " +i+ "</h1>");
}


    document.write(bonjour.toUpperCase().charAt(0));
    console.log(bonjour[0]);
*/


/*
for(var i =1;i<=tableauNombre.length;i++){
    console.log("Utilisation de la boucle tableauNombre")
    document.write("<h1>" +i+ "&nbsp; &nbsp; &nbsp;" +tableauNombre[i-1]+ "</h1>")
}

console.table(tableauNombre);
*/




function tableau() {

    var nombre = parseInt(prompt("Saisir le nombre voulu"));
    var nombreColonne = parseInt(prompt("Saisir le nombre de colonne voulu"));
    var nombreAfficher = 1;
    var boucleNombre = 0;
    var boucleColonne = 0;
    var color = 0;

    console.log("Appel de la fonction tableau");

    document.write("<table>");

    for ( boucleColonne = 0 ; boucleColonne<(nombre/nombreColonne) ; boucleColonne++){

        document.write("<tr>");

        for( boucleNombre = 1; boucleNombre <= nombre/(nombre/nombreColonne) ; boucleNombre++){
            if (nombreAfficher <= nombre){
                if(color === 1){
                    document.write("<th>" +nombreAfficher+ "</th>");
                    nombreAfficher++;
                }else{
                    document.write("<td>" +nombreAfficher+ "</td>");
                    nombreAfficher++;
                }

            }
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

tableau();
