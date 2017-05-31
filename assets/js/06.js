// initialisation du DOM

$(function(){
	function l(e){
		console.log(e);
	}

	l($("div"))

	l($("header"))

	// je souhaite sélectionner tous les éléments (descendants direct (enfants)) qui sont dans "header"
	l($("header").children())

	// je souhaite sélectionner les éléments "ul"
	l($("header").children("ul"))

	// je souhaite récupérer tous les éléments "li" de mon "ul"
	l($("header").children("ul").find("li"))

	// je souhaite récupérer uniquement le 2ème éléments de mes "li"
	l($("header").find("li").eq(1))

	// je souhaite connaitre le voisin immédiat de mon "header"
	l($("header").next())
	// le voisin du voisin
	l($("header").next().next())
	// le voisin précédent
	l($("header").prev())

	// les parents
	l($("header").parent())
});