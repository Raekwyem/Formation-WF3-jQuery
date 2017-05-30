/*
A l'aide de jQuery:

1 - A la soumission du formulaire, cacher le formulaire puis
2 - Créer un élément <p>
3 - Dans cet élément, afficher : Bonjour <nomcomplet> correspondant au nom saisie dans le formulaire
 */

// cette fonction anonyme sera executé à la soumission du formulaire
$("#MonFormulaire").on("submit", function(event){
	// permet d'annuler l'action par défaut du submit du formulaire
	event.preventDefault();
	$(this).replaceWith("<p>Bonjour " + $("#nomcomplet").val() + " !</p>");
});