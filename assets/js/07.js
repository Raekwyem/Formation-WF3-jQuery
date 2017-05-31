function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

$(function(){
	// écouter à quel moment est soumis notre formulaire
	// à la soumission de mon formulaire, je vais éxecuter une fonction anonyme
	
	// En JS:
	// document.getElementByID('contact').addEventListener("submit", MaFonctionAExecuter);

	$("#contact").on("submit", function(event) {
		/* event correspond ici à notre évènement "submit" */

		// arrêter la redirection HTML5
		event.preventDefault();

		/*
		suppression des différentes erreurs
		je cible tous les éléments qui contiennent la class "has-error", puis je supprime ".has-error" pour ces éléments.
		
		je supprime la class has-error en ciblant les éléments qui ont la class "has-error", je supprime la classe sur les éléments que je cible
		*/
		$('#contact .has-error').removeClass('has-error');
		$('#contact .text-danger').remove();

		// déclaration des variables avec les champs à vérifier
		var nom 		= $("#nom");
		var prenom 		= $("#prenom");
		var email 		= $("#email");
		var tel 		= $("#tel");

		// je passe à la vérification de chaque champ
		
			// 1 - vérification du nom
			if(nom.val().length == 0){
				// si le champs nom est vide, alors j'ajoute à son parent la class has-error
				nom.parent().addClass('has-error');

				// je rajoute une indication texte
				$("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
			};
			if(prenom.val() == ""){
				// si le champs nom est vide, alors j'ajoute à son parent la class has-error
				prenom.parent().addClass('has-error');

				// je rajoute une indication texte
				$("<p class='text-danger'>N'oubliez pas de saisir votre prénom</p>").appendTo(prenom.parent());
			};
			if(!validateEmail(email.val())){
     			email.parent().addClass('has-error');
     			$("<p class='text-danger'>N'oubliez pas de saisir votre email</p>").appendTo(email.parent());
			};
			if(tel.val().length == 0 || $.isNumeric(tel.val()) == false){
				tel.parent().addClass("has-error");
				$("<p class='text-danger'>N'oubliez pas de saisir votre numéro de téléphone</p>").appendTo(tel.parent());
			}
			if($(this).find('.has-error').length == 0){
				$(this).replaceWith('<div class="alert alert-success">Votre demande a bien été envoyée ! Nous vous répondrons dans les meilleurs délais.</div>');
			} else{
				$(this).prepend('<div class="alert alert-danger">Nous n\'avons pas été en mesure de valider votre demande. Vérifiez vos informations.</div>');
			}
	});
});	