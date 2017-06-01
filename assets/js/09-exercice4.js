/*
avec l'aide de jQuery, vous devrez:

1- à l'aide d'une API de Géolocalisation, vous afficherez dans un paragraphe du formulaire l'adresse IP ainsi que la Ville et/ou Code Postal de l'utilisateur connecté.

// utilisation de JSONP : geoip.nekudo.com || ip-api.com
 */
$(function(){
	// 1 - une requête Ajax simple
	$.ajax('http://geoip.nekudo.com/api/')
	// 2 - avec getJSON et JSONP (callback)
	$.getJSON('http://ip-api.com/json/?callback', function(resultat){
		console.log(resultat);

		// affichage sur ma page
		$('<p>').text("Votre IP est surveillée : " + resultat.query + " " + resultat.isp)
		.css({
			'background':'yellow',
			'color':'red'
		}).appendTo($('form'));
	});
});