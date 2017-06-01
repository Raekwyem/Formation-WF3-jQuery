function validateEmail(email){

	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
	    return false;
	} else {
	   	return true;
	}
};

$(function(){

	var CollectionDeContacts = [];
	// fonction ajouterContact(Contact) : ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification
	function ajouterContact(Contact){
		// ajout de Contact dans le tableau CollectionDeContacts
		CollectionDeContacts.push(Contact);
		// observez l'ajout des contacts dans la collection
		console.log(CollectionDeContacts);
		// on cache la phrase "aucun contact pour le moment" de la table
		$('.aucuncontact').hide();
		// MàJ HTML
		$('#LesContacts').find('tbody').append('<tr><td>'+ Contact.nom +'</td><td>'+ Contact.prenom +'</td><td>'+ Contact.email +'</td><td>'+ Contact.tel +'</td><tr>');
		// réinitialisation du formulaire
		reinitialisationDuFormulaire();
	};
	// fonction reinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0!
	function reinitialisationDuFormulaire(){
		// JS:
		//document.getElementByID('contact').reset();
		
		// jQuery:
		$('#contact').get(0).reset();
		// autre méthode:
		//$('#contact .form-control').val("");
	};
	// affichage d'une notification
	function afficheUneNotification(){
		$('.alert-contact').fadeIn().delay(3000).fadeOut();
	};
	// fonction qui permet de voir si un Contact est déjà présent dans la base de données
	function estCeQuunContactEstPresent(Contact){
		// boolean qui indique la présence ou non d'un contact
		var estPresent = false;
		// on parcourt le tableau à la recherche d'une correspondance
		for(var i = 0 ; i < CollectionDeContacts.length ; i++){
			// vérification pour chaque contact du tableau, s'il y a une correspondance avec mon objet Contact
			if(Contact.email === CollectionDeContacts[i].email){
				// si une correspondance est trouvé "estPresent" passe à "true"
				estPresent = true;
				// on arrête la boucle, plus besoin de poursuivre
				break;
			}
		}
		return estPresent;
	};


	$('#contact').on('submit', function(e){

		console.log(e);

		e.preventDefault();

		// définition des variables à utiliser
		var nom, prenom, email, tel;
		nom 	= $('#nom');
		prenom 	= $('#prenom');
		email 	= $('#email');
		tel 	= $('#tel');

		// vérification des informations entrées par l'utilisateur
		var mesInformationsSontValides = true;

		if(nom.val().length == 0){
			mesInformationsSontValides = false;
		};

		if(prenom.val().length == 0){
			mesInformationsSontValides = false;
		};

		if(tel.val().length == 0){
			mesInformationsSontValides = false;
		};

		if(!validateEmail(email.val())){
     		mesInformationsSontValides = false;
		};

		if(mesInformationsSontValides){
			// tout est correct, préparation du Contact
			var Contact = {
				'nom' 		: nom.val(),
				'prenom' 	: prenom.val(),
				'email' 	: email.val(),
				'tel' 		: tel.val()
			};
			// observation console
			console.log(Contact);

			// vérification si un Contact est bien présent
			if(!estCeQuunContactEstPresent(Contact)){
				// ajout du Contact
				ajouterContact(Contact);
			} else {
				alert('ATTENTION\nCe contact est déjà présent');
					}
		}	else{
				alert('ATTENTION\nVeuillez bien remplir tous les champs.');
			}
	

	});
});