$(function(){
/*
var Contacts = [];

//event.preventDefault();

function ajouterContact(Contact){

	var nom 	= $("#nom").val();
	var prenom 	= $("#prenom").val();
	var email 	= $("#email").val();
	var tel 	= $("#tel").val();
}*/
	$("#contact").on("submit", function(event) {

		event.preventDefault();

		$('#contact .has-error').removeClass('has-error');
		$('#contact .text-danger').removeClass('text-danger');

		var nom 		= $("#nom");
		var prenom 		= $("#prenom");
		var email 		= $("#email");
		var tel 		= $("#tel");

			if(nom.val().length == 0){
				
				nom.parent().addClass('has-error');

				$("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
			};
			if(prenom.val() == ""){
				
				prenom.parent().addClass('has-error');

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
	/*
	$(window).unload(saveSettings);
    loadSettings();
	*/
	function loadSettings() {
	    $('#nom').val(localStorage.nom);
	    $('#prenom').val(localStorage.prenom);
	    $('#email').val(localStorage.email);
	    $("#tel").val(localStorage.tel);
	}

	function saveSettings() {
	    localStorage.nom 	= $('#nom').val();
	    localStorage.prenom = $('#prenom').val();
	    localStorage.email 	= $('#email').val();
	    localStorage.tel 	= $("#tel").val();
	}

	var $LesContacts = $('#LesContacts');
	$('btn-primary').click(function () {        
		$LesContacts.append('<tr><td>' + localStorage.nom + '</td><td>' + $('#prenom').val() + '</td>></tr>');localStorage.setItem("#LesContacts", $08-Exercice3.html());
	});
/*
function reinitialisationDuFormulaire(){
	//$("#form")[0].reset();
}

function afficheUneNotification(){

}

function estCeQuunContactEstPresent(Contact){

}
*/
	function validateEmail(email){
		var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		var valid = emailReg.test(email);

		if(!valid) {
	        return false;
	    } else {
	    	return true;
	    }
	}

});