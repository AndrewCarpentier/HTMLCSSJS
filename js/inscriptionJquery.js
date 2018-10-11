    $("#nom").blur(function(){
        console.log("Verification du nom");
        if ($("#nom").val().trim().length === 0){
            $("#nom").addClass("erreur");
        }else{
            $("#nom").removeClass("erreur");
        }
    });

    $("#prenom").blur(function(){
        console.log("Verification du prenom");
        if ($("#prenom").val().trim().length === 0){
            $("#prenom").addClass("erreur");
        }else{
            $("#prenom").removeClass("erreur");
        }
    });

    $("#nomrue").blur(function(){
        console.log("Verification de la rue");
        if ($("#nomrue").val().trim().length === 0){
            $("#nomrue").addClass("erreur");
        }else{
            $("#nomrue").removeClass("erreur");
        }
    });

    $("#ville").blur(function(){
        console.log("Verification de la ville");
        if ($("#ville").val().trim().length === 0){
            $("#ville").addClass("erreur");
        }else{
            $("#ville").removeClass("erreur");
        }
    });

    $("#numrue").blur(function () {
        console.log("Verification du numero de rue");
        if ($("#numrue").val() <= 0) {
            $("#numrue").addClass("erreur");
    }else{
        $("#numrue").removeClass("erreur");
    }
    });

    $("#telephone").blur(function () {
        console.log("Verification du numero de telephone");
        if (String($("#telephone").val()).replace(/[^0-9]/g, '').trim().length ===10){
            $("#telephone").removeClass("erreur");
        }else{
            $("#telephone").addClass("erreur");
        }
    });

    $("#email").blur(function () {
        console.log("Verification de l'email");
        var emailReg = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        if (emailReg.test( $("#email").val() )){
            $("#email").removeClass("erreur");
        }else{
            $("#email").addClass("erreur");
        }
    });

    $("#datedenaissance").blur(function () {
       console.log("Verification de la date de naissance");
        var treizeAnsTimestamp = 1000*60*60*24*365.25*13;
        if ( Date.parse($("#datedenaissance").val()) > $.now() || $("#datedenaissance").val().trim().length === 0 ){
            $("#datedenaissance").addClass("erreur");
        } else if(Date.parse($("#datedenaissance").val()) > ($.now() - treizeAnsTimestamp)) {
            $("#datedenaissance").addClass("erreur");
            alert("Vous avez moins de treize ans");
        }else {
            $("#datedenaissance").removeClass("erreur");
        }
    });