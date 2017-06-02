/*
CONSIGNE: avec l'aide de jQuery, vous devrez:

1 - définir une structure HTML5 & CSS3 pour afficher des articles
2 - afficher une liste d'articles à partir de l'API:
https://jsonplaceholder.typicode.com/posts
3 - BONUS: afficher uniquement les 10 premièrs articles
4 - BONUS: mettre en place Markjs.io afin de surligner des mots dans les différents articles à l'aide d'un champ input.
 */

$(function(){
	$.getJSON('https://jsonplaceholder.typicode.com/posts', function(articles){
		console.log(articles);

		// 1ere solution
		for(i=0 ; i<5 ; i++){
			let article = articles[i];
			$(`<section>
				<header>
				<h3>${article.title}</h3>
				</header>
				<article>
					${article.body}
				</article>
			</section>`).appendTo($('main'));
		}
		// 2eme solution
		$.each(articles, function(i, article){
			$(`<section>
				<header>
				<h3>${article.title}</h3>
				</header>
				<article>
					${article.body}
				</article>
			</section>`).appendTo($('main'));
			if(i == 5){
				return false;
			}
		});
	}); // fin du getJSON
	// Mark JS
	$('#markjs').on('input', function(e){

		// récupérer la valeur saisie par l'utilisateur
		let keyword = $(this).val();

		// https://markjs.io/#mark & https://markjs.io/#unmark
		$('section').unmark().mark(keyword);
	});
});