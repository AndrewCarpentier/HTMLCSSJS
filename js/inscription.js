function validerFormulaire() {
    console.log("Appel de la fonction validerFormulaire");
    validationNom = false;
    validationPrenom = false;
    validationDateDeNaissance = false;
    validationNumeroDeLaRue = false;
    validationEmail = false;
    validationNomDeLaRue = false;
    validationVille = false;
    validationTelephone = false;
    verificationNom();
    verificationPrenom();
    verificationDateDeNaissance();
    verificationNumeroDeLaRue();
    verificationEmail();
    verificationNomDeLaRue();
    verificationVille();
    verificationTelephone();

    if (validationNom === true && validationPrenom === true && validationDateDeNaissance === true && validationNumeroDeLaRue === true && validationEmail === true &&
        validationNumeroDeLaRue === true && validationVille === true && validationTelephone === true){
        document.location.href = "../index.html"
    } else{
        alert("il y a des erreurs dans le formulaire");
    }
}

function verificationNom() {
    console.log("Appel de la fonction verificationNom");
    var x = document.getElementById("nom");
    var nom = x.value;
    if(nom.trim().length === 0){
        x.className="erreur";
    }else{
        x.classList.remove("erreur");
        validationNom = true;
    }
}

function verificationPrenom() {
    console.log("Appel de la fonction verificationPrenom");
    var x = document.getElementById("prenom");
    var prenom = x.value;
    if(prenom.trim().length === 0 ){
        x.className="erreur";
    }else{
        x.classList.remove("erreur");
        validationPrenom = true;
    }
}

function verificationDateDeNaissance() {
    console.log("Appel de la fonction verificationDateDeNaissance");
    var x = document.getElementById("datedenaissance");
    var form = document.forms["form1"];
    var dateNaissance = Date.parse(form.elements["datedenaissance"].value);
    var dateNow = new Date().getTime();
    var treizeAnsTimestamp = 1000*60*60*24*365.25*13;
    console.log("date de aujourd'hui (en timestamp) : " +dateNow);
    console.log("date de naissance (en timestamp) : " +dateNaissance);
    if (dateNaissance > dateNow || x.value.trim().length === 0){
        x.className = "erreur";
    }else if(dateNaissance > (dateNow-treizeAnsTimestamp)){
        x.className = "erreur";
        alert("vous avez moins de treize 13ans");
    }else{
        x.classList.remove("erreur");
        validationDateDeNaissance = true;
    }

}

function verificationNomDeLaRue() {
    console.log("Appel de la fonction verificatioNomDeLaRue");
    var x = document.getElementById("nomrue");
    var nomrue = x.value;
    if (nomrue.trim().length === 0){
        x.className = "erreur";
    }else{
        x.classList.remove("erreur");
        validationNomDeLaRue = true;
    }
}

function verificationNumeroDeLaRue() {
    console.log("Appel de la fonction verificationNumeroDeLaRue");
    var x = document.getElementById("numrue");
    var numero = x.value;
    if (numero <= 0 ){
        x.className = "erreur";
    }else{
        x.classList.remove("erreur");
        validationNumeroDeLaRue = true;
    }
}

function verificationVille() {
    console.log("Appel de la fonction verificationVille");
    var x = document.getElementById("ville");
    var ville = x.value;
    if (ville.trim().length === 0){
        x.className = "erreur";
    }else{
        x.classList.remove("erreur");
        validationVille = true;
    }
}

function verificationEmail() {
    console.log("Appel de la fonction verificationEmail");
    var x = document.getElementById("email");
    var email = x.value;
    valider = false;
    //verification de la taille
    if (email.trim().length === 0 ){
        x.className="erreur";
    } else{
        x.classList.remove("erreur");
    }
    //verification des caractere de l'adresse mail
    for (var i = 0 ; i < email.length ; i++) {
        if(email.charAt(i)=== '@' && i < (email.length-5)){
            for (var j = 0 ; j < email.length-2 ; j++){
                if (email.charAt(j) === '.'){
                    valider = true
                }
            }
        }
    }
    if (valider === false){
        x.className="erreur";
    } else{
        x.classList.remove("erreur");
        validationEmail = true;
    }
}

function verificationTelephone() {
    console.log("Appel de la fonction verificationTelephone");
    var x = document.getElementById("telephone");
    var telephone = x.value;
    var chiffre = String(telephone).replace(/[^0-9]/g, '');
 //remplace les caractere par autre que 0 et 9 par ''
    if(chiffre.trim().length === 10){
        x.classList.remove("erreur");
        validationTelephone = true;
    }else{
        x.className="erreur";
    }
}