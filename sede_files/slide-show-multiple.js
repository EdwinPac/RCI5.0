/** javascript slide-show-multiple **/
function obtenerdatoalt(){
	var elemento = document.getElementsByClassName('galeria');
	for (var i = 0; i < elemento.length; i++){
		var gal = elemento[i].getElementsByTagName('li');
		for(var c = 0; c < gal.length; c++){
			gal[c].title = gal[c].firstChild.alt;
		}
	}
}
function slide_show(){
	var elemento = document.getElementsByClassName('galeria'), 
		barra = document.getElementById('barra-progreso');
	for (var i = 0; i < elemento.length; i++){
		var gal = elemento[i].getElementsByTagName('li');
		for(var c = 0; c < gal.length; c++){
			if(gal[c].className == 'selected'){
				gal[c].className = 'noselected';
				if((c+1) >= gal.length) 
					gal[0].className = 'selected';
				else 
					gal[c+1].className = 'selected';
				break;
			} // fin if
		} // fin for
	} // fin for
	// barra
	barra.className = 'reset';
	setTimeout(function(){
		barra.className = 'completo';
	}, 5000);
}
window.onload = function(){
	//obtenerdatoalt();
	var elemento = document.getElementById('barra-progreso');
	elemento.className = 'completo';
	setInterval(slide_show, 4000);
}