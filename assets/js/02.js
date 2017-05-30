// format : $("selecteur")
// en jQuery, tous les sélecteurs CSS sont disponibles
// 
// DOM READY
// 
$(function(){
	
	function l(e){
		console.log(e);
	}

	// sélectionner les balises SPAN:

		// version JS:
		l("SPAN en JS :");
		l(document.getElementsByTagName("span"));

		// version jQuery:
		l("SPAN en JQ :");
		l($("span"));

	// sélectionner le menu:
		
		// version JS:
		l("ID via JS :");
		l(document.getElementByID("menu"));

		// version jQuery:
		l("ID via JQ :");
		l($("#menu"));

	// sélectionner les class:
		
		// version JS:
		l("class via JS :");
		l(document.getElementsByClassName("MaClasse"));

		// version jQuery:
		l("ID via JQ :");
		l($(".MaClasse"));

	// sélectionner par attribut:
		
		l('Par Attribut :')
		l($("[href='http://www.google.fr']"))
})