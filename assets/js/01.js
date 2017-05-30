// Disponibilité du DOM

/*
à partir du moment où mon DOM, c-à-d l'ensemble de l'arborescence de ma page est complètement chargé, je peux commencer à utiliser jQuery.

Je vais mettre l'ensemble de mon code dans une fonction, elle sera appelée automtiquement par jQuery lorsque le DOM sera entièrement défini.
*/
//3 façons de faire:

// 1ère façon
jQuery(document).ready(function(){

});

// 2ème façon
$(document).ready(function(){

});

// 3ème façon
$(function(){
	// ici le DOM est entièrement chargé, je peux procéder à mon code JS
	alert("Hello World !");
	// en JS:
	document.getElementById("TexteEnJQuery").innerHTML = "Mon texte en JS";
	// en jQuery:
	$("#TexteEnJQuery").html("Mon Texte en JQ");
});