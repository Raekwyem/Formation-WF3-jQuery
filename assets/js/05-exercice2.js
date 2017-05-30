        /* -------------------------------------------------
        |             ~~~   LA CONSIGNE     ~~~            |
        |                                                  |
        | A partir du Formulaire de Contact ci-dessus :    |
        |                                                  |
        |   1. Afficher à l'utilisateur un Récapitulatif   |
        |   de sa demande de contact.                      |
        |                                                  |
        ------------------------------------------------- */
$(function(){
	$("#MonFormulaire").on("submit", function(event){
		// permet d'annuler l'action par défaut du submit du formulaire
		event.preventDefault();
		$(this).replaceWith(
			"<p>Bonjour " + $("#fullname").val() + ", on te remercie pour ton message !</p>" 
			+ "<p>Ton email est: " + $("#email").val() + "</p>" 
			+ "<p>Ton numéro de téléphone est le: " + $("#tel").val() + "</p>" 
			+ "<p>Tu as soumis une requête au sujet de: " + $("#sujet").val() + "</p>" 
			+ "<p>Voici ton message: " + $("#message").val() + "</p>");
		/*
		fullname 	= $("#fullname").val();
		email 		= $("#email").val();
		tel 		= $("#tel").val();
		sujet 		= $("#sujet").val();
		message 	= $("#message").val();

		$(this).replaceWith()
		 */
	});
});