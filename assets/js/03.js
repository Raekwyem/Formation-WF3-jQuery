$(function(){
	// je souhaite cacher toutes les div de ma page HTML
	// console.log($("div"));
	// 
	$("div").hide("slow", function(){
		// une fois que la méthode hide() est terminée, mon alerte peux s'exécuter
		alert("fin du hide");

		// N.B: la fonction s'exécutera pour l'ensemble des éléments du sélecteur.
		
		// CSS
		$("div").css("background", "yellow");
		$("div").css("color", "red");

		// je fais réapparaitre mes divs
		$("div").show(); 
	});

	// en utilisant le chainage de methode, vous pouvez faire s'enchainer plusieurs fonctions les unes après les autres
	$("p").hide(1000).css({
		color: 'blue',
		'font-size' : '20px'
	}).delay(2000).show(500);
});